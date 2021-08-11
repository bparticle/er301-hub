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
 *     a way to remenber what currency the purchase was made
 */


export const wantedList = [
    {
        id: 1,
        name: "Polyphonic synth voices",
        backers: [{
            method: "PayPal BigCartel",
            id: "8XP50585A76648707",
            originalAmount: "€30.56EUR - €15.44EUR Printful",
            amount: 36.32,
            expenses: 18.35,
        }, {
            method: "PayPal",
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
        status: "completed",
        requirements: [
            "A v0.6 port of the custom unit",
        ]
    },
    {
        id: 4,
        name: "Tuner",
        status: "open",
        backers: [{
            comment: "Also Stripe payment pm_1JLQmRFOjjc1191vawFy5s97 but margin too low, my bad",
            method: "donation",
            id: "78P23286K8101524V",
            amount: 5,
            expenses: 0,
        }],
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
        name: "Polyphonic sample player",
        status: "open",
        backers: [{
            method: "donation",
            id: "27D84702VD193592T",
            amount: 5.3,
            expenses: 0,
        }, {
            method: "donation",
            id: "3WF254839F936914K",
            amount: 12.5,
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
            id: "9K042806JG8515355",
            amount: 5,
            expenses: 0,
        }, {
            method: "donation",
            id: "3WF254839F936914K",
            amount: 12.5,
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
            amount: 29.92,
            expenses: 20.5,
        }, {
            method: "PayPal Big Cartel",
            id: "8KN15268X15007640",
            amount: 29.92,
            expenses: 10.32,
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
            id: "2ME005286P6288212",
            amount: 35.16,
            expenses: 13.12,
        }, {
            method: "Fund migration from the Shards project by Joe",
            id: "7CJ23396TA5052804",
            originalAmount: "€30.56EUR - €14.94EUR Printful",
            amount: 36.15,
            expenses: 17.67,
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
 * The donation 84N50938UE048280N was arbitrarily split between Poly synth voices, Karplus-strong/modal and poly-sample projects (no preference was communicated)
 */
