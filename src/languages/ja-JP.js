export default {
  epa: {
    Errors: {
      EPJ: {
        '100010': '不明なエラーが発生しました',
        '100020': '不明なエラーが発生しました',
        '100030': '不明なエラーが発生しました',
        '110010': '不明なエラーが発生しました',
        '110020': 'データが見つかりませんでした',
        '110030': '不明なエラーが発生しました',
        '110040': '不明なエラーが発生しました',
        '110050': '不明なエラーが発生しました',
        '130000': 'データへのアクセスが許可されていません',
        '130010': 'ログインできませんでした',
        '130020': 'ログインできませんでした',
        '130030': '読み込み専用です',
        '150000': '入力内容をご確認ください',
        '150010': '入力してください',
        '150020': '使用できない文字が含まれています',
        '150030': '入力された文字が長すぎます',
        '150031': '入力された文字が短すぎます',
        '150040': '入力内容をご確認ください',
        '150050': '数値以外が入力されています',
        '150051': '入力範囲をご確認ください',
        '150052': '入力範囲をご確認ください',
        '150060': '正しいメールアドレスを入力してください',
        '150070': '参照ループが発生している',
        '150080': '正しい電話番号を入力してください',
        '150090': '正しい日時を入力してください',
        '150100': '正しい郵便番号を入力してください',
        '150110': '参照データが存在しない',
        '150120': '正しい都道府県を入力してください',
        '150130': '不正な値',
        '150140': 'フィールドIDが不正',
      },
    },

    Plugin: {
      Member: {
        MemberLogin: {
          Login: 'ログイン',
          LoginId: '入力',
          Password: '入力',
          ForgetPassword: 'パスワードをお忘れですか？',
          SignUp: '新規会員登録',
        },
        MemberSignUp: {
          SignUp: '会員登録',
          HaveAccount: '',
          CreatedSuccessfully: '会員登録申請が完了しました。申請が承認されるまで少々お待ち下さい。',
        },
        MemberDetail: {
          EditProfile: '変更',
          Logout: 'ログアウト',
        },
      },
      Blog: {
        View: {
          SendAttachment: {
            TakeCamera: 'カメラで撮影',
            SelectFromAlbum: 'アルバムから選択',
            Others: 'その他',
          },
        },
        BlogDetail: {
          CreatedSuccessfully: '登録が完了しました',
        },
      },
    },
    UI: {
      Search: {
        Placeholder: '検索',
      },
      Chat: {
        Placeholder: 'メッセージを入力',
        SeeMore: 'もっと見る',
        Message: 'メッセージ',
        Empty: 'なし',
      },
      Category: {
        SeeMore: 'もっと見る',
      },
      Inputs: {
        InstancePointer: {
          Search: '検索',
          Button: {
            Close: '閉じる',
          },
        },
      },
    },
    Model: {
      member: {
        login_id: 'メールアドレス',
        password: 'パスワード ',
        name: 'お名前',
        companyName: '会社名',
        phone: '電話番号',
      },
      entry: {
        contents: {
          type: 'タイプ',
          clients: '顧客',
          staffs: '顧客担当者',
        },
        title: '件名',
        description: '内容',
      },
    },
    Common: {
      Submit: '登録',
      Cancel: 'キャンセル',
      Confirm: '変更する',
      TilteConfirm: 'ステータスを変更する',
      Add: '追加',
      TilteConfirmRemoveCart: '削除します',
      TilteConfirmChangeQuantity: '変更します',
      ConfirmRemove: '削除',
      TitleSignUpConfirm:
        '新規会員の申し込みが完了しました。承認まで、少々お待ちください。',
      ConfirmSignUp: 'ログイン画面へ',
      GoBack: '戻る',
    },
    App: {
      ProjectList: {
        ListItem: {
          Item: {
            status: {
              New: '新規',
              InProgress: '進行中',
              Resolved: '解決',
              Done: '完了',
            },
          },
        },
        Title: '案件一覧',
      },
      Project: {
        Filelink: {
          title: 'ファイルリンク',
        },
        MemoArea: {
          note: 'メモ',
          InputPlaceholder: 'メッセージを入力',
          empty: 'なし',
        },
        ProjectDetailArea: {
          Type: 'タイプ',
          CaseDetail: '案件詳細',
          Content: '内容',
          PersonCharge: 'ご担当者様',
          StaffDepartment: '営業担当者',
          RegisteredDate: '登録日時',
          ModifiedDate: '更新日時',
          History: '履歴',
        },
        ProjectCartArea: {
          EditCart: 'カート確認・変更',
          Cart: 'カート',
        },
        ShoppingCartScreen: {
          Remove: '削除',
          PickerPlaceholder: '選択してください',
        },
        StatusArea: {
          New: '新規',
          InProgress: '進行中',
          Resolved: '解決',
          Done: '完了',
        },
        ProjectRegisterTitle: '案件登録',
      },
      Home: {
        Menu: 'メインメニュー',
        Project: '相談',
        Catalog: 'カタログ',
        MyPage: 'マイページ',
        Blog: 'ブログ',
      },
      ToolBar: {
        Home: 'ホーム',
        Project: '相談',
        Catalog: 'カタログ',
        Blog: 'ブログ',
        Mypage: 'マイページ',
      },
      Common: {
        Button: {
          Ok: '保存',
          Cancel: 'キャンセル',
        },
      },
      LinkAttack: {
        Add: 'リンク追加',
        List: 'ファイルリンク一覧',
        Dropdown: {
          Placeholder: 'ファイルリンクを選択',
        },
        Button: {
          Add: '追加',
        },
      },
      ProductCategories: {
        ItemizedDataTable: {
          Category: 'カテゴリ',
          Stock: '在庫',
          Status: 'ステータス',
          History: '履歴',
        },
        ReviewArea: {
          HeaderTitle: 'レビュー',
          SeeMore: 'もっと見る',
        },
        'Q&A': {
          information: 'ナレッジ',
          next: '続きを見る',
        },
        AddToCartTitle: 'カートへ追加',
        AddToCartButton: 'カートに追加',
        AddDes: '追加先',
        SelectDropdownPlaceholder: 'カートを選択',
        TempCart: '未登録のカート',
        Collapse: '省略',
        Expand: 'もっと見る',
        Valid: '販売中',
        InValid: '在庫なし',
        Yes: 'あり',
        No: 'なし',
        Title: 'カタログ',
      },
      Error: {
        Required: 'Field must be required',
      },
      Cart: {
        Title: 'カート',
      },
      ProductReview: {
        Title: 'レビュー',
        PostReview: 'レビュー投稿',
        Post: '投稿',
        Comment: 'コメント',
      },
      MyPage: {
        Name: 'お名前',
        Company: '会社名',
        Phone: '電話番号',
        Email: 'email',
        Edit: '変更',
        Logout: 'ログアウト',
      },
      Product: {
        Status: {
          Valid: '在庫あり',
          InValid: '在庫なし',
        },
        SearchResult: '検索結果',
      },
    },

    Format: {
      DateFormat: 'YYYY/MM/DD',
      DateFormatChat: 'YYYY/MM/DD HH:mm:ss',
      DateTimeFormat: 'YYYY/MM/DD HH:mm:ss',
      MonthDayFormat: 'MM/DD',
      TimeZone: 'Asia/Tokyo',
      Currentcy: 'JPY',
      LocalePrice: 'ja-JP',
    },
    ElapsedTimeFormatter: {
      Yesterday: '昨日',
      DayOfWeek: {
        0: '日曜日',
        1: '月曜日',
        2: '火曜日',
        3: '水曜日',
        4: '木曜日',
        5: '金曜日',
        6: '土曜日',
      },
    },
  },
};
