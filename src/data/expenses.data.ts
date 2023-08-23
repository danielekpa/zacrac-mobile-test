import AppleIcon from "@app/components/icons/apple.icon";
import BillsIcon from "@app/components/icons/billls.icon";
import CarIcon from "@app/components/icons/car.icon";
import NetflixIcon from "@app/components/icons/netflix.icon";
import PatreonIcon from "@app/components/icons/patreon.icon";
import SpotifyIcon from "@app/components/icons/spotify.icon";

export const expensesCategory = [
  {
    id: 1,
    icon: CarIcon,
    title: 'Auto & transport',
    totalBudget: 700,
    expenses: [
      {
        title: 'Auto & transport',
        budget: 350,
        spent: 164,
      },
      {
        title: 'Auto insurance',
        budget: 250,
        spent: 130,
      }
    ]
  },
  {
    id: 2,
    icon: BillsIcon,
    title: 'Bill & Ultilities',
    totalBudget: 320,
    expenses: [
      {
        title: 'Subscriptions',
        budget: 52,
        spent: 52,
      },
      {
        title: 'House service',
        budget: 138,
        spent: 128,
      },
      {
        title: 'Maintenance',
        budget: 130,
        spent: 100,
      }
    ]
  }
]

export const subscriptions = [
  {
    id: 1,
    icon: PatreonIcon,
    name: 'Patreon membership',
    amount: 19.99,
    type: 'mo'
  },
  {
    id: 2,
    icon: NetflixIcon,
    name: 'Netflix',
    amount: 12.00,
    type: 'mo'
  },
  {
    id: 3,
    icon: AppleIcon,
    name: 'Apple payment',
    amount: 19.99,
    type: 'mo'
  },
  {
    id: 4,
    icon: SpotifyIcon,
    name: 'Spotify',
    amount: 6.99,
    type: 'mo'
  },
]

export const creditStat = [
  {
    id: 1,
    title: 'On-time patments',
    remark: 'Good',
    mark: '95%',
    action: '1 missed'
  },
  {
    id: 2,
    title: 'Credit Utilization',
    remark: 'Not bad',
    mark: '95%',
    action: '-15%'
  },
  {
    id: 3,
    title: 'Age of credit',
    remark: 'Good',
    mark: '8 year',
    // action: '1 missed'
  },
]