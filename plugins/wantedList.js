/* 
 * NO SENSITIVE INFOMATION MAY BE SHARED IN THIS FILE!!
 * --> only anonymized data for calculations on the WANTED page
 *
 * backers: object with the following required fields
 *   method: string
 *     if "donation" then we follow the donation percentages, else assumed Big Cartel purchase
 *   id: string
 *     PayPal transaction code of other unique ID
 *   amount: number
 *     gross amount in USD in with PayPal fee subtracted
 *   expenses: number
 *     PrinFul expenses
 *   originalAmount: string
 *     just a reminder of the original currency and amount
 *   currency: string
 *     a way to remenber what currency the purchase was made
 */


export const wantedList = [
    {
        id: 1,
        name: "Polyphonic synth voices",
        backers: [{
            method: "PayPal",
            id: "2ME005286P6288212",
            amount: 4.41,
            expenses: 0,
            currency: "USD"
        }, {
            method: "manual pledge Bruno",
            id: "manualrandomstring014354612021684",
            amount: 4,
            expenses: 0,
            currency: "USD"
        }],
        status: "open",
        link: "https://forum.orthogonaldevices.com/t/polyphonic-synthesizer-bespoke-unit",
        requirements: [
            "V/Oct inputs per voice",
            "waveform blending",
            "envelope control",
        ]
    },
    {
        id: 2,
        name: "Metronome",
        status: "open",
        requirements: [
            "beat and sub-beat click sound",
            "selectable rhythms",
            "mute button",
            "bpm input",
        ]
    },
    {
        id: 3,
        name: "Shards",
        backers: [{
            method: "PayPal",
            id: "2ME005286P6288212",
            amount: 35.16,
            expenses: 13.12,
            currency: "USD"
        }, {
            method: "PayPal",
            id: "7CJ23396TA5052804",
            originalAmount: "€30.56EUR - €14.94EUR Printful",
            amount: 36.15,
            expenses: 17.67,
            currency: "EUR>USD"
        }],
        link: "https://forum.orthogonaldevices.com/t/shards-custom-unit/2541",
        status: "open",
        requirements: [
            "A v0.6 port of the custom unit",
        ]
    },
    {
        id: 4,
        name: "Tuner",
        status: "open",
        requirements: [
            "Show note name instead of Herzt values",
            "Graphic representation of tuning",
        ]
    },
    {
        id: 5,
        name: "Phase distortion",
        status: "open",
        requirements: [
            "Linear phase shifter with an auxiliary input",
            "to overlay one signal over another's phase",
        ]
    },
    {
        id: 8,
        name: "Upwards compressor, downwards expander",
        status: "open",
        requirements: [
            "with attack/release"
        ]
    },
    {
        id: 6,
        name: "MI port Elements",
        status: "open",
        backers: [{
            method: "donation",
            id: "27D84702VD193592T",
            amount: 5.3,
            expenses: 0,
            currency: "USD"
        }],
        requirements: [
            "",
        ]
    },
    {
        id: 7,
        name: "MI port Rings",
        status: "open",
        backers: [{
            method: "donation",
            id: "27D84702VD193592T",
            amount: 5.3,
            expenses: 0,
            currency: "USD"
        }],
        requirements: [
            "",
        ]
    }
]