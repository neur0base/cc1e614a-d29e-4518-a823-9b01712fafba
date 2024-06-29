const fs = require('fs');
const path = require('path');

// ルーティング設定（実際の使用時にはこの部分を外部ファイルから読み込むか、引数として受け取ります）
const screens = [
    {
        "id": "TaskAdd",
        "title": "タスク新規追加",
        "component": "TaskAdd",
        "needLogin": false,
        "web": {
            "url": "/tasks/new"
        },
        "stacks": []
    },
    {
        "id": "TaskDetail",
        "title": "タスク詳細",
        "component": "TaskDetail",
        "needLogin": true,
        "web": {
            "url": "/tasks/:taskID"
        },
        "stacks": []
    },
    {
        "id": "TaskEdit",
        "title": "タスク編集",
        "component": "TaskEdit",
        "needLogin": true,
        "web": {
            "url": "/tasks/:taskId/edit"
        },
        "stacks": []
    },
    {
        "id": "TaskList",
        "title": "タスク一覧",
        "component": "TaskList",
        "needLogin": true,
        "web": {
            "url": "/tasks"
        },
        "stacks": []
    }
];

// ディレクトリを再帰的に削除する関数
function removeDir(dir) {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach((file) => {
            const curPath = path.join(dir, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                removeDir(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.r    }
}

// appディレクトリをクリーンアップする関数
function cleanupAppDirectory(baseDir = 'app') {
    if (fs.existsSync(baseDir)) {
        fs.readdirSync(baseDir).forEach((file) => {
            const curPath = path.join(baseDir, file);
            if (fs.lstatSync(curPath).isDirectory()) {
                removeDir(curPath);
            } else if (file !== 'layout.js' && file !== 'page.js') {
                // layout.jsとpage.jsは削除しない
                fs.unlinkSync(curPath);
            }
        });
    } else {
        fs.mkdirSync(baseDir);
    }
}

// App Router用のディレクトリを生成する関数
function generateAppRouterStructure(screens, baseDir = 'app') {
    screens.forEach(screen => {
        const { web, component, needLogin } = screen;
        if (web && web.url) {
            const segments = web.url.split('/').filter(segment => segment);
            let currentPath = baseDir;
            let para
            segments.forEach((segment, index) => {
                if (segment.startsWith(':')) {
                    // 動的ルートの場合
                    const paramName = segment.slice(1);
                    currentPath = path.join(currentPath, `[${paramName}]`);
                    // params.push(paramName);
                } else {
                    currentPath = path.join(currentPath, segment);
                }

                if (!fs.existsSync(currentPath)) {
                    fs.mkdirSync(currentPath, { recursive: true })                }

                if (index === segments.length - 1) {
                    // ページコンポーネントを作成
                    const pageContent = `
import { ${component} } from "@/src/components/";

export default function Page({ params }) {
    return <${component} />;
`;
                    fs.writeFileSync(path.join(currentPath, 'page.js'), pageContent.trim());

                    // 認証が必要な場合、middlewareを追加
                    if (needLogin) {
                        const middlewareContent = `
import { NextResponse } from 'next/server';

export function middleware(request) {
    // Add your authentication logic here
    // For example:
    // if (!isAuthenticated(request)) {
    //     return NextResponse.redirect(new URL('/login', request.url));
    // }
    return NextResponse.next();
}
`;
                        fs.writeFileSync(path.join(currentPath, 'middleware.js'), middlewareContent.trim());
                    }
                }
            });
        }
    });
}

// メイン実行部分
const APP_DIR = 'app';

console.log('Cleaning up existing app directory...');
cleanupAppDirectory(APP_DIR);

console.log('Generating new App Router structure...');
generateAppRouterStructure(screens, APP_DIR);

console.log('App Router structure has been generated successfully!');