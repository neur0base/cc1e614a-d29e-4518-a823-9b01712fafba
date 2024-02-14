# Ubuntuベースイメージを利用
FROM ubuntu:20.04

# 必要なツールをインストール
RUN apt-get update && apt-get install -y curl git && \
    # Node.jsのインストール
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    # 指定されたバージョンのNode.jsをインストール
    npm install -g n && \
    n 18.18.0 && \
    npm install -g yarn

EXPOSE 3000

CMD ["/bin/bash"]
