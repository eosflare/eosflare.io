'use strict'

// English
const en = {
  // common: title
  defaultTitle: 'EOS Block Explorer',
  title_explorer: 'eosflare.io',
  title_ram: 'RAM',
  title_api: 'API',
  title_bp: 'Producers',
  title_key: 'Key',
  title_account: 'Account',
  title_accounts: 'Accounts',
  title_block: 'Block',
  title_blocks: 'Blocks',
  title_tx: 'Transaction',
  title_txs: 'Transactions',
  title_tokens: 'Tokens',
  title_token: 'Token',
  title_bidname: 'Bid Names',
  title_voters: 'Voters',
  title_proxies: 'Proxies',
  title_whales: 'Whales',

  // common: strings, terms
  core_symbol: 'EOS',
  loading: 'Loading...',
  memo: 'Memo',
  account: 'Account',
  account_name: 'Account Name',
  public_key: 'Pubkey',
  transaction: 'Transaction',
  transaction_id: 'Transaction Id',
  block: 'Block',
  block_number: 'Block Number',
  ram_uppercase: 'RAM',
  ram: 'Ram',
  cpu: 'CPU',
  net: 'NET',
  action_seq: 'Action Seq',
  action_receiver: 'Action Receiver',
  irreversible: 'Irreversible',
  reversible: 'Reversible',
  unstaked: 'Unstaked',
  staked: 'Staked',
  refund: 'Refund',
  unstaking: 'Unstaking',
  supply: 'Supply',
  max_supply: 'Max Supply',
  price: 'Price',
  usd: 'USD',

  // common: errors
  err_please_refresh: 'Error, Please refresh the page',

  // common: table columns
  col_permission: 'Permission',
  col_required_auth: 'Required Auth',
  col_seq: 'Seq',
  col_time: 'Time',
  col_type: 'Type',
  col_info: 'Info',
  col_new_name: 'New Name',
  col_last_bid: 'Last Bid',
  col_bidder: 'Bidder',
  col_highest_price: 'Highest Price',
  col_name: 'Name',
  col_sold_at: 'Sold At',
  col_deal: 'Deal',
  col_tx: 'Trx',
  col_transaction: 'Transaction',
  col_block: 'Block',
  col_producer: 'Producer',
  col_tx_action: 'Txns / Actions',
  col_account: 'Account',
  col_amount: 'Amount',
  col_rank: 'Rank',
  col_staked: 'Staked',
  col_refund: 'Refund',
  col_liquidity: 'Liquidity',
  col_balance: 'Balance',
  col_total: 'Total',
  col_percentage: '%',
  col_token: 'Token',
  col_holders: 'Holders',
  col_supply: 'Supply',
  col_max_supply: 'Max Supply',
  col_status: 'Status',
  col_actions: 'Actions',
  col_voter: 'Voter',
  col_votes: 'Votes',
  col_to: 'To',
  col_proxy: 'Proxy',
  col_tx_count_short: 'Txns',
  col_action_count_short: 'Acts',

  // search
  search_placeholder: 'account / key / tx / block',

  // account
  total_balance: 'Total Balance',
  privileged: 'privileged',
  voting_proxy: 'voting proxy',
  header_permissions: 'Permissions',
  header_latest_actions: 'Latest Actions',
  nil: 'NULL',
  no_permissions_found: 'No permissions found.',
  no_actions_found: 'No actions found.',
  hide_spam: 'Hide Spam',

  // bidname
  bids: 'Bids',
  highest_bid: 'Highest Bid',
  highest_price: 'Highest Price',
  header_top_100_bids: 'Top 100 Bids',
  header_sold_names: 'Sold Names',
  no_names_found: 'No names for bidding found.',

  // block
  block_hash: 'Block Hash',
  timestamp: 'Timestamp',
  producer: 'Producer',
  producer_signature: 'Producer Signature',
  confirmed: 'Confirmed',
  new_producers: 'New Producers',
  schedule_version: 'Schedule Version',
  previous_hash: 'Previous Hash',
  tx_mroot: 'M-Root Transaction',
  action_mroot: 'M-Root Action',
  header_tx: 'Transactions',
  no_tx_found: 'No transactions found.',

  // error
  you_found: 'You found ',
  secret_area: 'a secret area!',
  under_maintenance: 'The site is temporarily closed for maintenance.',
  deploying_on_going: 'We are deploying new changes. We expect to be back in seconds.',

  // explorer
  live_tps: 'Live TPS',
  head_block: 'Head Block',
  irreversible_block: 'Irreversible Block',
  transactions: 'Transactions',
  tps: 'TPS',
  live: 'live',
  peak: 'peak',
  votes: 'Votes',
  voters: 'Voters',
  proxies: 'Proxies',
  accounts: 'Accounts',
  whales: 'Whales',
  tokens: 'Tokens',
  name_bids: 'Name Bids',
  blocks: 'Blocks',

  // key
  header_associated_accounts: 'Associated Accounts',
  no_associated_accounts_found: 'No associated accounts found.',

  // notfound
  oops: 'Oops!',
  nothing_found: 'Nothing found :(',

  // ram
  ram_price: 'Ram Price',
  reserved: 'Reserved',
  header_latest_ram_actions: 'Latest RAM Actions',

  // token
  holders: 'Holders',
  market_cap: 'Market Cap',
  ranking_of: 'Ranking of',
  no_holders_found: 'No holders found',

  // tokens
  standard_token: 'Standard Token',
  standard_token_hint: 'The token has the same ABI as eosio.token.',
  non_standard_token: 'Non-standard Token',
  non_standard_token_hint: 'The token has a custom token ABI',
  no_tokens_found: 'No tokens found',
  no_result_part1: 'Your search for',
  no_result_part2: 'found no results',

  // tx
  pending: 'Pending',
  block_time: 'Block Time',
  expiration_time: 'Expiration Time',
  ref: 'Ref',
  delay: 'Delay',
  header_actions: 'Actions',

  // voters
  total_voters: 'Total Voters',
  total_votes: 'Total Votes',
  header_top_100_voters: 'Top 100 Voters',
  proxy: 'Proxy',
  via_proxy: 'Via Proxy',
  no_voters_found: 'No voters found.',

  // voters
  header_top_100_proxies: 'Top 100 Proxies',
  no_proxies_found: 'No proxies found.',

  // PageFooter
  vote_us_prefix: 'vote the super fast',
}

export default en