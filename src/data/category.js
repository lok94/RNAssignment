export default [
{
    id : 1,
    bg: '#A8DDE9',
    color: '#3F5B98',
    category : 'Blazer',
    image : require("../assets/category/blazer.png"),
    stock : 200,
    subCategories : [
        {
            id : 1,
            category_id : 1,
            subCategory : 'Red Full Sleves',
            image : require('../assets/subCategory/blazer/redblazer.png'),
            stock : 10,
        },
        {
            id : 2,
            category_id : 1,
            subCategory : 'Black Blazer',
            image : require('../assets/subCategory/blazer/blackblazer.png'),
            stock : 20,
        },
        {
            id : 3,
            category_id : 1,
            subCategory : 'Grey Blazer',
            image : require('../assets/subCategory/blazer/greyblazer.png'),
            stock : 30,
        },
        {
            id : 4,
            category_id : 1,
            subCategory : 'Yellow Blazer',
            image : require('../assets/subCategory/blazer/yellowblazer.png'),
            stock : 40,
        }
    ]
},
{
    id : 2,
    bg: '#086E4B',
    color: '#FCBE4A',
    category : 'Kurta',
    image : require("../assets/category/kurta.png"),
    stock : 100,
    subCategories : [
        {
            id : 1,
            category_id : 2,
            subCategory : 'Neck Embroidery',
            image : require('../assets/subCategory/kurta/neckkurta.png'),
            stock : 5,
        },
        {
            id : 2,
            category_id : 2,
            subCategory : 'Indo Western',
            image : require('../assets/subCategory/kurta/indowestkurta.png'),
            stock : 8,
        },
        {
            id : 3,
            category_id : 2,
            subCategory : 'Long Kurta',
            image : require('../assets/subCategory/kurta/longkurta.png'),
            stock : 6,
        }
    ]
},
{
    id : 3,
    bg: '#FECBCA',
    color: '#FD5963',
    category : 'sweater',
    image : require("../assets/category/sweater.png"),
    stock : 70,
    subCategories : [
        {
            id : 1,
            category_id : 3,
            subCategory : 'Half Zip',
            image : require('../assets/subCategory/sweater/halfzip.png'),
            stock : 23,
        },
        {
            id : 2,
            category_id : 3,
            subCategory : 'Roll Neck',
            image : require('../assets/subCategory/sweater/rollneck.png'),
            stock : 11,
        }
    ]
},
{
    id : 4,
    bg: '#193B8C',
    color: '#FECBCD',
    category : 'tshirt',
    image : require("../assets/category/tshirt.png"),
    stock :50,
    subCategories : [
        {
            id : 1,
            category_id : 4,
            subCategory : 'Polo Tee',
            image : require('../assets/subCategory/tshirt/polotee.png'),
            stock : 15,
        },
        {
            id : 2,
            category_id : 4,
            subCategory : 'V Neck',
            image : require('../assets/subCategory/tshirt/vneck.png'),
            stock : 15,
        }
    ]
},
{
    id : 5,
    bg: '#FDBD50',
    color: '#F5F5EB',
    category : 'jeans',
    image : require("../assets/category/jeans.png"),
    stock : 300,
    subCategories : [
        {
            id : 1,
            category_id : 5,
            subCategory : 'Skinny Fit',
            image : require('../assets/subCategory/jeans/skinnyfit.png'),
            stock : 90,
        }
    ]
}
];