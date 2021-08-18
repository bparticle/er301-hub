/* 
 * NO SENSITIVE INFOMATION MAY BE SHARED IN THIS FILE!!
 * --> only anonymized data for calculations on the WANTED page
 *
 * link: string (URL to forum discussion)
 * hubPage: string (URL to finished project page on the hub)
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
 *     a way to remenber what currency the purchase was made
 */


export const wantedList = [
    {
        id: 1,
        name: "Polyphonic synth voices",
        backers: [{
            method: "PayPal Big Cartel",
            id: "3HG38017B8838733R",
            date: "2021-08-17T23:54:29.511Z",
            amount: 20,
            expenses: 10,
        }, {
            method: "donation",
            id: "0FA42908KV450101U",
            date: "2021-08-15T23:54:29.511Z",
            amount: 4.38,
            expenses: 0,
        }, {
            method: "donation",
            id: "6H823656G1770412G",
            date: "2021-08-18T23:54:29.511Z",
            amount: 10,
            expenses: 0,
        }, {
            method: "PayPal BigCartel",
            id: "2AH7353309316470N",
            originalAmount: "€29.92EUR - €10.32EUR Printful",
            date: "2021-08-10T23:54:29.511Z",
            amount: 35.29,
            expenses: 12.17,
        }, {
            method: "PayPal BigCartel",
            id: "49P99905FF4394649",
            originalAmount: "€29.6EUR - €14.94EUR Printful",
            amount: 34.92,
            expenses: 17.62,
        }, {
            method: "PayPal BigCartel",
            id: "8XP50585A76648707",
            originalAmount: "€30.56EUR - €15.44EUR Printful",
            amount: 36.32,
            expenses: 18.35,
        }, {
            method: "PayPal (bounty Hunter's target test donation)",
            id: "2ME005286P6288212",
            amount: 4.41,
            expenses: 0,
        }, {
            method: "manual pledge Bruno",
            id: "manualrandomstring014354612021684",
            amount: 4,
            expenses: 0,
        }, {
            method: "donation",
            id: "84N50938UE048280N",
            amount: 10,
            expenses: 0,
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
        link: "https://forum.orthogonaldevices.com/t/shards-custom-unit/2541",
        hubPage: "/projects/shards",
        status: "completed",
        requirements: [
            "A v0.6 port of the custom unit",
        ]
    },
    {
        id: 4,
        name: "Signal analysis",
        status: "open",
        backers: [{
            comment: "Also Stripe payment pm_1JLQmRFOjjc1191vawFy5s97 but margin too low, my bad",
            method: "donation",
            id: "78P23286K8101524V",
            amount: 5,
            expenses: 0,
        }],
        requirements: [
            "Tuner: show note name instead of Herzt values",
            "Graphic representation of tuning",
            "other types of signal analysis?"
        ]
    },
    {
        id: 5,
        name: "Phase distortion",
        backers: [{
            method: "donation",
            id: "6H823656G1770412G",
            date: "2021-08-18T23:54:29.511Z",
            amount: 10,
            expenses: 0,
        }],
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
        name: "Polyphonic sample player",
        status: "open",
        backers: [{
            method: "donation",
            id: "27D84702VD193592T",
            amount: 5.3,
            expenses: 0,
        }, {
            method: "donation",
            originalAmount: "€12.5EUR",
            id: "3WF254839F936914K",
            amount: 14.65,
            expenses: 0,
        }, {
            method: "donation",
            id: "84N50938UE048280N",
            amount: 9,
            expenses: 0,
        }],
        requirements: [
            "Sample tails to ring out and overlap",
            "Round robin or other method of polyphony",
        ]
    },
    {
        id: 7,
        name: "Karplus-strong / Modal Resonator VCO",
        status: "open",
        link: "https://forum.orthogonaldevices.com/t/wanted-resonator-vco",
        backers: [{
            method: "donation",
            originalAmount: "€5EUR",
            id: "9K042806JG8515355",
            amount: 5.86,
            expenses: 0,
        }, {
            method: "donation",
            originalAmount: "€12.5EUR",
            id: "3WF254839F936914K",
            amount: 14.65,
            expenses: 0,
        }, {
            method: "donation",
            id: "27D84702VD193592T",
            amount: 5.3,
            expenses: 0,
        }, {
            method: "manual pledge Bruno",
            id: "manualrandomstring14687351468154864351",
            amount: 7,
            expenses: 0,
        }, {
            method: "donation",
            id: "84N50938UE048280N",
            amount: 37.95,
            expenses: 0,
        }, {
            method: "PayPal Big Cartel",
            id: "9RS142907N0424046",
            date: "2021-08-08T23:54:29.511Z",
            originalAmount: "€29.92EUR - €20.5EUR",
            amount: 35,
            expenses: 24,
        }, {
            method: "PayPal Big Cartel",
            id: "8KN15268X15007640",
            originalAmount: "€29.92EUR - €10.32EUR",
            amount: 35,
            expenses: 12.10,
        }, {
            method: "PayPal Big Cartel",
            id: "7BB98429T9947402C",
            date: "2021-08-12T23:54:29.511Z",
            originalAmount: "€28.98EUR - €16.6EUR",
            amount: 34.01,
            expenses: 19.48,
        }, {
            method: "PayPal Big Cartel",
            id: "3HG38017B8838733R",
            date: "2021-08-17T23:54:29.511Z",
            originalAmount: "€65.34EUR - €35.25EUR",
            amount: 56.54,
            expenses: 31.29,
        }],
        requirements: [
            "Karplus-strong synthesis / resonator based sound generator",
            "Input for excitation (defaulting to white noise)",
            "V/Oct. input",
            "Round robin voice allocation"
        ]
    },
    {
        id: 9,
        name: "Teletype SC.PROBE",
        status: "open",
        backers: [{
            method: "Fund migration from the Shards project by Joe",
            id: "missing ID",
            amount: 35.16,
            expenses: 13.12,
        }, {
            method: "Fund migration from the Shards project by Joe",
            id: "7CJ23396TA5052804",
            originalAmount: "€30.56EUR - €14.94EUR Printful",
            amount: 36.15,
            expenses: 17.67,
        }, {
            method: "donation",
            id: "b5a1c06",
            originalAmount: "€15EUR PP donation",
            amount: 17.69,
            expenses: 0,
        }],
        link: "https://forum.orthogonaldevices.com/t/wanted-two-way-teletype-integration-er-301-tt-tt-code-modification",
        requirements: [
            "lets the ER-301 talk back to the i2c leader",
            "Drop this anywhere in an ER-301 chain, set it’s port number, and when requested by an i2c leader, it would report back the discrete value of the signal at it’s location at that moment in time",
        ]
    }
]

/*
 * NOTES
 * -----
 * The donation 84N50938UE048280N of €47.95EUR -> $56,95USD was arbitrarily split between Poly synth voices, Karplus-strong/modal and poly-sample projects (no preference was communicated)
 */
