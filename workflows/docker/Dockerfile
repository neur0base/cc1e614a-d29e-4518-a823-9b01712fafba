# Ubuntuベースイメージを利用
FROM ubuntu:20.04

# Timezoneを設定（UTC）
ENV TZ=UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# 必要なツールをインストール
RUN apt-get update && apt-get install -y curl git && \
    # Node.jsのインストール
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    # 指定されたバージョンのNode.jsをインストール
    npm install -g n && \
    n 18.18.0 && \
    npm install -g yarn pm2

EXPOSE 3000

WORKDIR /home/ubuntu/sys/workflows
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
