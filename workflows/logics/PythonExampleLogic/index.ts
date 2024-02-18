import PythonLogicTemplate from "../templates/PythonLogicTemplate/index.js";

const pythonCode = `
    result = {
        'std': np.std(inputData.data_array),
        'mean': np.mean(inputData.data_array)
    }
    print(result)
`;
declare type T = { // 入力の型定義
    data_array: number[];
}
declare type U = { // 出力の型定義
    std: number;
    mean: number;
}
const inputObj: T = {
    data_array: [
        -0.43800128, 3.14119828, 5.47367166, 4.5935351, 2.61527408, 2.1846853,
        3.6515389, 3.23463354, 7.21363654, 3.43932231, -1.44373789, -0.81767441
    ]
};
const libraries: string[] = [
    'numpy',
];

const logic = PythonLogicTemplate<T,U>({pythonCode, libraries});
const output = await logic.exec(inputObj);
console.log(output);