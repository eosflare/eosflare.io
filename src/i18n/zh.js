'use strict'

// 中文
const zh = {
  // common: title
  defaultTitle: 'EOS 区块浏览器',
  title_explorer: 'eosflare.io',
  title_ram: 'RAM',
  title_api: 'API',
  title_bp: '超级节点',
  title_key: '密钥',
  title_account: '帐户',
  title_accounts: '帐户',
  title_block: '区块',
  title_blocks: '区块',
  title_tx: '交易',
  title_txs: '交易',
  title_tokens: '代币',
  title_token: '代币',
  title_bidname: '账户竞拍',
  title_voters: '投票人',
  title_proxies: '投票代理',
  title_whales: '富豪榜',

  // common: strings, terms
  core_symbol: 'EOS',
  loading: '正在加载......',
  memo: '备注',
  account: '帐户',
  account_name: '帐户名',
  public_key: '公钥',
  transaction: '交易',
  transaction_id: '交易ID',
  block: '区块',
  block_number: '区块号',
  ram_uppercase: 'RAM',
  ram: 'Ram',
  cpu: 'CPU',
  net: 'NET',
  action_seq: '操作序号',
  action_receiver: '操作接收者',
  irreversible: '不可逆转',
  reversible: '可逆转',
  unstaked: '可用余额',
  staked: '质押',
  refund: '赎回中',
  unstaking: '赎回中',
  supply: '流通量',
  max_supply: '总流通量',
  price: '价格',
  usd: '美元',

  // common: errors
  err_please_refresh: '错误,请刷新页面',

  // common: table columns
  col_permission: '权限',
  col_required_auth: '授权',
  col_seq: '序号',
  col_time: '时间',
  col_type: '类型',
  col_info: '信息',
  col_new_name: '新名称',
  col_last_bid: '最后出价',
  col_bidder: '投标人',
  col_highest_price: '最高价',
  col_name: '名称',
  col_sold_at: '售于',
  col_deal: '交易',
  col_tx: '交易',
  col_transaction: '交易',
  col_block: '区块',
  col_producer: '区块生产者',
  col_tx_action: '交易 / 操作',
  col_account: '帐户',
  col_amount: '金额',
  col_rank: '排名',
  col_staked: '质押',
  col_refund: '赎回中',
  col_liquidity: '可用余额',
  col_balance: '总额',
  col_total: '总计',
  col_percentage: '百分比',
  col_token: '代币',
  col_holders: '持有人',
  col_supply: '流通量',
  col_max_supply: '总流通量',
  col_status: '状态',
  col_actions: '操作',
  col_voter: '选民',
  col_votes: '投票',
  col_to: '到',
  col_proxy: '投票代理',
  col_tx_count_short: '交易',
  col_action_count_short: '操作',

  // search
  search_placeholder: '账号 / 公钥 / 交易 / 区块',

  // account
  total_balance: '总余额',
  privileged: '特权账号',
  voting_proxy: '投票代理',
  header_permissions: '权限',
  header_latest_actions: '最新操作',
  nil: '空',
  no_permissions_found: '找不到权限',
  no_actions_found: '找不到任何操作',
  hide_spam: '隐藏垃圾信息',

  // bidname
  bids: '出价',
  highest_bid: '最高出价',
  highest_price: '最高价',
  header_top_100_bids: '前100名出价',
  header_sold_names: '已售出的名字',
  no_names_found: '找不到招标的名字',

  // block
  block_hash: '区块哈希',
  timestamp: '时间戳',
  producer: '区块生产者',
  producer_signature: '区块生产者签名',
  confirmed: '已确认',
  new_producers: '新生产者',
  schedule_version: '计划版本',
  previous_hash: '上一个哈希',
  tx_mroot: 'M-Root（交易）',
  action_mroot: 'M-Root（操作）',
  header_tx: '交易',
  no_tx_found: '找不到交易',

  // error
  you_found: '你找到了',
  secret_area: '一个秘密区！',
  under_maintenance: '网站正在维护',
  deploying_on_going: '我们正在部署新的升级。我们希望能在几秒钟后回来。',

  // explorer
  live_tps: '实时TPS',
  head_block: '最新区块',
  irreversible_block: '不可逆区块',
  transactions: '交易数量',
  tps: 'TPS',
  live: '实时',
  peak: '高峰',
  votes: '投票',
  voters: '投票人',
  proxies: '投票代理',
  accounts: '帐户',
  whales: '富豪榜',
  tokens: '代币列表',
  name_bids: '账号竞拍',
  blocks: '最新区块',

  // key
  header_associated_accounts: '关联帐户',
  no_associated_accounts_found: '找不到关联的帐户',

  // notfound
  oops: '哎呀！',
  nothing_found: '没有找到: (',

  // ram
  ram_price: 'Ram 价格',
  reserved: '已售出',
  header_latest_ram_actions: '最新的RAM交易',

  // token
  holders: '持有人',
  market_cap: '市值',
  ranking_of: '排名',
  no_holders_found: '没有持有人',

  // tokens
  standard_token: '标准代币',
  standard_token_hint: '代币与eosio.token具有相同的ABI',
  non_standard_token: '非标准代币',
  non_standard_token_hint: '代币有自定义代币ABI',
  no_tokens_found: '找不到代币',
  no_result_part1: '你的搜索',
  no_result_part2: '找不到结果',

  // tx
  pending: '待确认',
  block_time: '区块时间',
  expiration_time: '过期时间',
  ref: '参考',
  delay: '延迟',
  header_actions: '操作',

  // voters
  total_voters: '总选民',
  total_votes: '总票数',
  header_top_100_voters: '前100名选民',
  proxy: '投票代理',
  via_proxy: '通过代理',
  no_voters_found: '找不到选民',

  // voters
  header_top_100_proxies: '前100名投票代理',
  no_proxies_found: '找不到投票代理',

  // PageFooter
  vote_us_prefix: '支持我们请投票给',
}

export default zh