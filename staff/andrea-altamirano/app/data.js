const users = [
    { name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123' }
]

const machinery = [
    {
        type: 'Jaw Crusher',
        synonyms: '?',
        brand: 'Tesab',
        model: '700i',
        description: 'Based on the proven 10570, the New 700i is a more Streamlined and Powerful Tracked Jaw Crusher designed with Contractors in mind.With its user friendly design, the 700i is now easier to manoeuvre onsite and transport around various markets due to its new weight and dimensions while still maintaining the original Jaw Crushing Unit. Featuring Tesab\'s new and improved step deck vibrating feeders, allowing a higher throughput tonnage, improved material separation quality and the ability to handle dry, damp or wet material – the 700i is a highly versatile Jaw Crusher that can be set up in minutes! The 700i can be fed by Excavator as a standalone unit and also integrates easily into the Tesab range of Secondary Crushers and Screeners.',
        image: 'https://www.lectura-specs.es/models/renamed/orig/plantas-de-reciclaje-de-escombros-700i-tesab.jpg'
    },
    {
        type: 'Jaw Crusher',
        synonyms: '?',
        brand: 'Tesab',
        model: '800i',
        description: 'Now featuring Tesab’s new and improved step deck vibrating feeders to improve material separation quality and the ability to handle dry, damp or wet material, it also boats an additional 2 Deck Independent Pre-Screen for increased production – the 800i is an exceptionally efficient rock crushing machine. With a range of engines to suit any market, the 800i can be fed by Excavator as a standalone unit and also integrates easily into the Tesab range of Secondary Crushers and Screeners.',
        image: 'https://www.lectura-specs.es/models/renamed/orig/plantas-de-reciclaje-de-escombros-800i-tesab.jpg'
    },
    {
        type: 'Jaw Crusher',
        synonyms: '?',
        brand: 'Tesab',
        model: '700ie',
        description: '700ie comes complete with efficient all electric drive with 3 year warranty on main electric components, producing less than 20 litres per hour fuel usage with the option to work on mains electric for even lower running costs! The 700ie is packed with new features including Auto Unblock & Reverse Crusher Operation, Custom Panel Enclosure with Intergrated Air Conditioning & 10″ Display Control Panel with Mobile App & Remote Accees! With up to 33% more Fuel Efficent & as much as 70% Reduced Operating Costs, the 700ie can be fed by Excavator as a standalone unit and also integrates easily into the Tesab range of Secondary Crushers and Screeners.',
        image: 'https://www.tesab.com/wp-content/uploads/2022/02/700ie-3.jpg'
    },

    {
        type: 'Impact Crusher',
        synonyms: '?',
        brand: 'Tesab',
        model: '623CT',
        description: 'Due to the unique design of the 623 crusher unit, an exceptionally good cubical shape and high reduction rate can be easily achieved and the reliability and consistency of this machine makes it unrivaled in its field. The 623CT features a heavy duty impact crusher unit with 1100mm (42”) diameter rotor with extra crushing and shaping path.Suited for both Secondary and Tertiary applications the 623CT can work standalone or integrate easily into existing Crushing and Screening operations.',
        image: 'https://www.tesab.com/wp-content/uploads/2020/03/623CT-8.jpg'
    },

    {
        type: 'Impact Crusher',
        synonyms: '?',
        brand: 'Tesab',
        model: '1412T',
        description: 'The 1412T is fitted with a heavy duty feed hopper and belt feeder design, while the crusher unit boasts a 1200mm (47″) rotor incorporating the unique Tesab crushing path design, which produces a high reduction ratio.Suited for both Secondary and Tertiary applications the 1412T can work standalone or integrate easily into existing crushing and screening operations.',
        image: 'https://www.tesab.com/wp-content/uploads/2020/03/1412T-1.jpg'
    },

    {
        type: 'Impact Crusher',
        synonyms: '?',
        brand: 'Tesab',
        model: '1012TS',
        description: 'The Tesab 1012TS is a Tracked, Large Impact Crusher designed to accept a large feed size whilst at the same time producing Consistent, High Quality End Product at a Low Cost per Ton.It boasts a x2 deck independent pre-screen fitted as standard which results in lower cost operation as a sized product can be produced on the side belt while at the same time reducing wear. The 1012TS features a heavy duty crusher unit has a 1200mm (47”) diameter rotor along with an extra crushing and shaping path.Suited for both Primary and Secondary applications the 1012TS can work standalone or integrate easily into existing crushing and screening operations.',
        image: 'https://www.tesab.com/wp-content/uploads/2020/09/1012TS-Concrete-Recycling-1.jpg'
    },
    {
        type: 'Cono Crusher',
        synonyms: '?',
        brand: 'Tesab',
        model: '1150TC',
        description: '?',
        image: ''
    },

    {
        type: 'Prescreeners',
        synonyms: '?',
        brand: 'Tesab',
        model: 'TS1340',
        description: '?',
        image: ''
    },

    {
        type: 'Prescreeners',
        synonyms: '?',
        brand: 'Tesab',
        model: 'TS1550',
        description: '?',
        image: ''
    },

    {
        type: 'Prescreeners',
        synonyms: '?',
        brand: 'Tesab',
        model: 'TS1660',
        description: '?',
        image: ''
    },

    {
        type: 'Screeners',
        synonyms: '?',
        brand: 'Tesab',
        model: 'TS2430',
        description: '?',
        image: ''
    },
    {
        type: 'Screeners',
        synonyms: '?',
        brand: 'Tesab',
        model: 'TS2600',
        description: '?',
        image: ''
    },
    {
        type: 'Screeners',
        synonyms: '?',
        brand: 'Tesab',
        model: 'TS3430',
        description: '?',
        image: ''
    },

    {
        type: 'Screeners',
        synonyms: '?',
        brand: 'Tesab',
        model: 'TS3600',
        description: '?',
        image: ''
    },
    {
        type: 'Cintas',
        synonyms: '?',
        brand: 'Tesab',
        model: '6536T',
        description: '?',
        image: ''
    },
    {
        type: 'Cintas',
        synonyms: '?',
        brand: 'Tesab',
        model: '8042T',
        description: '?',
        image: ''
    },
    {
        type: 'Cintas',
        synonyms: '?',
        brand: 'Tesab',
        model: '8042TSL',
        description: '?',
        image: ''
    },
    {
        type: 'Reciclaje',
        synonyms: '?',
        brand: 'JLM',
        model: 'TR100',
        description: '?',
        image: ''
    },
    {
        type: 'Reciclaje',
        synonyms: '?',
        brand: 'JLM',
        model: 'REC100',
        description: '?',
        image: ''
    },
    {
        type: 'Accesorios',
        synonyms: 'Dust Cannon',
        brand: 'Screenpod',
        model: 'S65',
        description: '?',
        image: ''
    },
    {
        type: 'Accesorios',
        synonyms: 'Dust Cannon',
        brand: 'Screenpod',
        model: 'S45',
        description: '?',
        image: ''
    },
    {
        type: 'Accesorios',
        synonyms: '',
        brand: 'Screenpod',
        model: 'Airvac',
        description: '?',
        image: ''
    }
]