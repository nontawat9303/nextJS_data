import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'CPU AIR COOLER (พัดลมซีพียู) THERMALTAKE UX100 ARGB',
    image:
      'https://www.jib.co.th/img_master/uploads/Mildz/MESA/ddy2.gif',
    address: '1 $',
    description: 'The hydraulic bearing self-lubricates with a high quality, friction-reducing substance that lowers operation noise and enhance thermal efficiency. The seal cap prevents leakage of the lubricant and extends the lifespan of the unit.',
  },
  {
    id: 'm2',
    title: 'NOTEBOOK (โน้ตบุ๊ค) ACER PORSCHE DESIGN ACER BOOK RS AP714-51GT-75JB (BLACK)',
    image:
      'https://www.jib.co.th/img_master/product/original/2021012213254744925_1.png',
    address: '2 $',
    description: 'CPU : INTEL CORE I7-1165G7 RAM : 16 GB LPDDR4X  STORAGE : 1 TB PCIe/NVMe M.2 SSD DISPLAY : 14" FULL HD IPS TOUCH-SCREEN VGA : NVIDIA GEFORCE MX350 2 GB GDDR5',
  },
  {
    id: 'm3',
    title: 'MAINBOARD (เมนบอร์ด) 1200 MSI MPG Z590 GAMING PLUS',
    image:
      'https://www.jib.co.th/img_master/product/original/2021042615514346350_1.jpg',
    address: '3 $',
    description: 'Unleash and sustain maximum performance with an aggressive VRM design built with a total of 14 Duet Rail Power System(DRPS). Combining 2x 8-pin power connectors and exclusive Core Boost technology, MPG series motherboard is ready to sustain heavy daily work.',
  },
  {
    id: 'm4',
    title: 'UPS (เครื่องสำรองไฟฟ้า) SYNDOME ECO-II 800 (800 VA/360 WATT)',
    image:
      'https://www.jib.co.th/img_master/product/original/2019120909263435929_1.jpg',
    address: '4 $',
    description: 'มีระบบ Stabilizer 3 ระดับ รับแรงดันไดเกว้าง 145-280 Vac',
  },
  {
    id: 'm5',
    title: 'KEYBOARD (คีย์บอร์ด) SIGNO KB-712 (RUBBER DOME) (ILLUMINATED)',
    image:
      'https://www.jib.co.th/img_master/product/original/2019042913322933624_2.jpg',
    address: '5 $',
    description: 'FEATURES : RUBBER DOME SWITCH',
  },
  {
    id: 'm6',
    title: 'MOUSE (เมาส์ไร้สาย) GLORIOUS MODEL O WIRELESS (MATTE WHITE)',
    image:
      'https://www.jib.co.th/img_master/product/original/2021041009074646228_1.jpg',
    address: '6 $',
    description: 'Model O Wireless has the lowest wireless latency of any mouse in its class. The state-of-the-industry technology provides responsive, crisp clicks and no doubleclicking.',
  },
  {
    id: 'm7',
    title: 'KEYBOARD (คีย์บอร์ด) GAMESIR BLUETOOTH Z1 [MECHANICAL] (IOS/ANDROID/PC)',
    image:
      'https://www.jib.co.th/img_master/product/original/2018072115494730725_1.jpg',
    address: '7 $',
    description: 'คีย์บอร์ดบลูทูธมือเดียว GameSir Z1 เหมาะสำหรับเกมแนว FPS, Moba, Action รองรับการใช้งานบนมือถือระบบ Android, iOS และ PC และสามารถเชื่อมต่อกับเม้าส์ได้ทุกรูปแบบทั้ง Wireless 2.4Ghz และแบบสาย USB',
  },
  {
    id: 'm8',
    title: 'MOUSE (เมาส์) RAZER DEATHADDER ESSENTIAL + MOUSE PAD (เมาส์แพด) RAZER GOLIATHUS SPEED PIKACHU LIMITED EDITION',
    image:
      'https://www.jib.co.th/img_master/product/original/2020102109131843194_1.jpg',
    address: '8 $',
    description: 'Wanna be the very best? Then be ready for any showdown with our signature Razer gear, evolved with iconic Pokémon style. Electrify your setup with our exclusive set of high-performance peripherals, inspired by the cutest and most beloved Pokémon of all time—Pikachu.',
  },
  {
    id: 'm9',
    title: 'CASE FAN (พัดลมเคส) THERMALTAKE PURE 12 ARGB SYNC TT PREMIUM EDITION 3 FAN PACK',
    image:
      'https://www.jib.co.th/img_master/product/original/2019030809091133201_1.jpg',
    address: '9 $',
    description: 'The ARGB controller allows users to switch LED modes, LED colors, and LED Speeds when using a motherboard without a 5V addressable RGB header. Users can switch between flow, ripple, pulse, blink, wave, full light, RGB spectrum, and off modes with various colors and LED speeds options.',
  },
  {
    id: 'm10',
    title: 'TABLET (แท็บเล็ต) MICROSOFT SURFACE GO 2 P/8/128 SC-STQ-00011 (PLATINUM)',
    image:
      'https://www.jib.co.th/img_master/product/original/2020061914055740661_1.png',
    address: '10 $',
    description: 'Surface Go 2 พร้อมรับมือกับทุกสิ่งที่คุณต้องทำตลอดวัน จดไอเดีย ช่วยทำการบ้าน สร้างและซ้อมงานนำเสนอ และจัดการอีเมลของคุณ',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }; 
}

export default HomePage;
