#基になるdocker image
FROM reactnativecommunity/react-native-android 

ARG BASE_DIR

# watchmanとnmapをインストール(nmap は自分の好み)
RUN apt update -qq && apt install -qq -y --no-install-recommends watchman nmap

#work ディレクトリの作成
RUN mkdir -p /home/react-native/${BASE_DIR}
WORKDIR /home/react-native/${BASE_DIR}

#パッケージのインストール
COPY . .
RUN yarn install