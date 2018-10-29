'use strict'

// 한국어
const kr = {
  // common: title
  defaultTitle: 'EOS 블록 탐색기',
  title_explorer: 'eosflare.io',
  title_api: 'API 플레어',
  title_ram: 'RAM',
  title_bp: '블록 프로듀서',
  title_key: '키',
  title_account: '계정',
  title_accounts: '계정',
  title_block: '블럭',
  title_blocks: '블럭',
  title_tx: '트랜잭션',
  title_txs: '트랜잭션',
  title_tokens: '토큰',
  title_token: '토큰',
  title_bidname: '계정 경매',
  title_voters: '유권자',
  title_proxies: '프록시',
  title_whales: '고래',

  // common: strings, terms
  core_symbol: 'EOS',
  loading: '로딩 중 ...',
  memo: '비고',
  account: '계정',
  account_name: '계정 이름',
  public_key: '공개 키',
  transaction: '트랜잭션',
  transaction_id: '트랜잭션 ID',
  block: '블럭',
  block_number: '블럭 번호',
  ram_uppercase: 'RAM',
  ram: '램',
  cpu: 'CPU',
  net: 'NET',
  action_seq: '액션',
  action_receiver: '액션 리시버',
  irreversible: '되돌릴 수 없음',
  reversible: '가역성',
  unstaked: '유통량',
  staked: '스테이크된',
  refund: '환불 진행 중',
  unstaking: '환불 진행 중',
  supply: '공급',
  max_supply: '최대 공급',
  price: '가격',
  usd: 'USD',

  // common: errors
  err_please_refresh: '오류, 페이지를 새로 고침하십시오.',

  // common: table columns
  col_permission: '허가',
  col_required_auth: '필수 인증',
  col_seq: 'Seq',
  col_time: '시간',
  col_type: '유형',
  col_info: '정보',
  col_new_name: '새 이름',
  col_last_bid: '마지막 입찰가',
  col_bidder: '입찰자',
  col_highest_price: '최고 가격',
  col_name: '이름',
  col_sold_at: '판매처',
  col_deal: '거래',
  col_tx: '트랜잭션',
  col_transaction: '트랜잭션',
  col_block: '블럭',
  col_producer: '제작자',
  col_tx_action: '트랜잭션 / 액션',
  col_account: '계정',
  col_amount: '금액',
  col_rank: '순위',
  col_staked: '스테이크된',
  col_refund: '환불 진행 중',
  col_liquidity: '유통량',
  col_balance: '잔액',
  col_total: '합계',
  col_percentage: '백분율',
  col_token: '토큰',
  col_holders: '소지자',
  col_supply: '공급',
  col_max_supply: '최대 공급',
  col_status: '상태',
  col_actions: '액션',
  col_voter: '유권자',
  col_votes: 'Votes',
  col_to: '끝',
  col_proxy: '프록시',
  col_tx_count_short: '트랜잭션',
  col_action_count_short: '액션',

  // search
  search_placeholder: '계정 / 키 / 트랜잭션 / 블럭',

  // account
  total_balance: '총계',
  privileged: '특권',
  voting_proxy: '투표 프록시',
  header_permissions: '권한',
  header_latest_actions: '액션',
  nil: '이 없습니다',
  no_permissions_found: '권한이 없습니다.',
  no_actions_found: '작업을 찾을 수 없습니다.',
  hide_spam: '스팸 숨기기',

  // bidname
  bids: '입찰가',
  highest_bid: '가장 높은 입찰가',
  highest_price: '가장 높은 가격',
  header_top_100_bids: '상위 100 개 입찰가',
  header_sold_names: '판매 된 이름',
  no_names_found: '입찰에 이름이 없습니다.',

  // block
  block_hash: '블럭 블럭',
  timestamp: '타임 스탬프',
  producer: '생산자',
  producer_signature: '제작자 서명',
  confirmed: '확인 됨',
  new_producers: '새로운 제작자',
  schedule_version: '일정 버전',
  previous_hash: '이전 해시',
  tx_mroot: 'M-Root (트랜잭션)',
  action_mroot: 'M-Root (액션)',
  header_tx: '트랜잭션',
  no_tx_found: '거래가 없습니다.',

  // error
  you_found: '찾았습니다',
  secret_area: '비밀 영역!',
  under_maintenance: '사이트가 유지 보수를 위해 일시적으로 닫혔습니다.',
  deploying_on_going: '우리는 새로운 변경 사항을 배포하고 있습니다. 우리는 몇 초 안에 다시 돌아올 것으로 기대합니다. ',

  // explorer
  live_tps: '실시간 TPS',
  head_block: '헤드 블록',
  irreversible_block: '철회 불가능한 블록',
  transactions: '트랜잭션',
  tps: 'TPS',
  live: '실시간',
  peak: '피크',
  votes: '투표',
  voters: '유권자',
  proxies: '프록시',
  accounts: '계정',
  whales: '탑 홀더들',
  tokens: '토큰',
  name_bids: '계정 경매',
  blocks: '블록',

  // key
  header_associated_accounts: '연결된 계정',
  no_associated_accounts_found: '연결된 계정이 없습니다.',

  // notfound
  oops: '죄송합니다.',
  nothing_found: '아무것도 발견되지 않았습니다 :',

  // ram
  ram_price: 'Ram Price',
  reserved: '예약 됨',
  header_latest_ram_actions: '최신 RAM 액션',

  // token
  holders: '소지자',
  market_cap: '시가 총액',
  ranking_of: '순위 지정',
  no_holders_found: '소지자를 찾을 수 없음',

  // tokens
  standard_token: '표준 토큰',
  standard_token_hint: '토큰에는 eosio.token과 동일한 ABI가 있습니다.',
  non_standard_token: '비표준 토큰',
  non_standard_token_hint: '토큰에 맞춤 토큰 ABI가 있습니다.',
  no_tokens_found: '토큰을 찾을 수 없습니다.',
  no_result_part1: '귀하의 검색 내용',
  no_result_part2: '결과가 없습니다',

  // tx
  pending: '미확인의',
  block_time: '블럭 시간',
  expiration_time: '만료 시간',
  ref: '참고',
  delay: '지연',
  header_actions: '작업',

  // voters
  total_voters: '총 유권자',
  total_votes: '총 투표 수',
  header_top_100_voters: '상위 100 명의 유권자',
  proxy: '프록시',
  via_proxy: '프록시를 통해',
  no_voters_found: '유권자를 찾을 수 없습니다.',

  // voters
  header_top_100_proxies: '상위 100 개의 프록시',
  no_proxies_found: '프록시가 없습니다.',

  // PageFooter
  vote_us_prefix: '우리에게 투표 해주세요. ',
}

export default kr