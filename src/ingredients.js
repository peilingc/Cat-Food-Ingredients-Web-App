const meat = [
    { 
        name: 'chicken',
        details: 'Real chicken is considered both the white and the dark meat of the bird. It’s a high-quality source of protein and amino acids that help build and maintain your pet’s muscles. It’s also a natural source of glucosamine for joint health and mobility.'
    },
    {
        name: 'beef',
        details:'Real beef is a high-quality red meat. It’s an excellent source of protein and amino acids that help build and maintain your pet’s muscles. It’s also a natural source of glucosamine for joint health and mobility.'
    },
    {
        name: 'cod',
        details: 'Cod is a fish that is naturally sourced from the ocean. It’s a high-quality source of protein and amino acids that help build and maintain your pet’s muscles.'
    },
    {
        name: 'duck',
        details: 'Duck is a novel protein made up of mostly dark meat. It’s a high-quality source of protein and amino acids that help build and maintain your pet’s muscles. It’s also rich in fat for a high-quality source of energy.'
    },
    {
        name: 'lamb',
        details: 'Real lamb is a high-quality red meat. It’s an excellent source of protein and amino acids that help build and maintain your pet’s muscles. It’s also a natural source of glucosamine for joint health and mobility.'
    },
    {
        name: 'salmon',
        details: 'Real salmon is an oily fish that’s rich in omega-3 fatty acids. It’s a high-quality source of protein and amino acids that help build and maintain your pet’s muscles. And, as a natural source of fat and omega-3 fatty acids, it helps give your pet healthy skin and a soft, shiny coat.'
    },
    {
        name: 'shrimp',
        details: 'Shrimp is a shellfish that is naturally sourced from the ocean. It’s a high-quality source of protein and amino acids that help build and maintain your pet’s muscles.'
    },
    {
        name: 'tuna',
        details: 'Real tuna is a hearty, nutrient-rich red meat fish. It’s a high-quality source of protein and amino acids that help build and maintain your pet’s muscles.'
    },
    {
        name: 'turkey',
        details: 'Real turkey is considered both the white and the dark meat of the bird. It’s a high-quality source of protein and amino acids that help build and maintain your pet’s muscles. It’s also a natural source of glucosamine for joint health and mobility.'
    },
    {
        name: 'herring',
        details: 'Herring is an oily fish that is rich in omega-3 fatty acids. It is a high-quality source of protein and amino acids that help build and maintain your pet’s muscles. And, as a natural source of fat and omega-3 fatty acids, herring can help give your pet healthy skin and a soft, shiny coat.'
    }
];

const vegetablesAndFruits = [
    {
        name : 'carrots',
        details : 'Carrots are a root vegetable rich in minerals and vitamins like beta-carotene.'
    },
    {
        name : 'pumpkin',
        details : 'Pumpkin is a gourd rich in fiber, potassium and vitamin C.'
    },
    {
        name : 'kale',
        details : 'Kale is known as a “superfood”, whick is packed full of vitamins and minerals.'
    },
    {
        name : 'pomegranate',
        details : 'Pomegranate contains high anti-oxidant level. It is also a good source of dietary fibre and folate, and can provides Vitamin C and Vitamin K.'
    },
    {
        name : 'potato',
        details : 'Potato provides carbohydrate energy. It is a source of Vitamin A, niacin, Vitamin B6, folate, phosphorus and copper, and a very good source of dietary fibre, Vitamin C, Vitamin K, thiamin and manganese.'
    },
    {
        name : 'squash',
        details : 'Squash is a good source of beta-carotene, Vitamin K, thiamin, niacin, phosphorus and copper, and a very good source of dietary fibre, Vitamin C, riboflavin, Vitamin B6, folate, magnesium, potassium and manganese.'
    },
    {
        name : 'tomato',
        details : 'Tomato is a fruit that contains high level of lycopene, an anti-oxidant.'
    },
    {
        name : 'blueberries',
        details : 'Blueberries are a flavorful fruit rich in antioxidants, fiber and vitamins C and K.'
    },
    {
        name : 'Peas',
        details : 'Peas are legumes rich in protein, fiber, vitamins and minerals.'
    },
    {
        name : 'cranberries',
        details : 'Cranberries are antioxidant-rich furits that are also high in vitamin C and fiber.'
    }
];

const grains = [
    {
        name : 'brown rice',
        details : 'Brown rice is a whole grain rice that includes the fiber-rich bran. It’s used as a natural source of carbohydrates that helps fuel your pet’s body for healthy energy. It also contains linoleic acid, an omega-6 fatty acid, for healthy skin and a shiny coat, and is a rich source of fiber for healthy digestion.'
    },
    {
        name : 'brewers rice',
        details : 'Brewers rice is simply rice kernels that have been chipped or broken. It’s a natural source of carbohydrates that helps make your pet’s food more digestible. It also has the added benefit of being a high-quality source of energy.'
    },
    {
        name : 'oats',
        details : 'Oats are an excellent carbohydrate source, as well as manganese and molybdenum. They are also a very good source of phosphorus as well as a good source of copper, biotin, vitamin B1, magnesium, dietary fiber, chromium, zinc, and protein.'
    },
    {
        name : 'quinoa',
        details : 'Quinoa is a carbohydrate that is low glycemic and hypo-allergenic.'
    },
    {
        name : 'Barley',
        details : 'Barley is a cereal grain used as a natural source of carbohydrates to give your pet healthy energy. It is also a nutrient-dense source of fiber for healthy digestion and a source of protein for strong muscles.'
    },
    {
        name : 'long grain rice',
        details : 'Long grain rice is a unique variety of rice derived from long seeds. It’s used as a natural source of carbohydrates that helps fuel your pet’s body for healthy energy.'
    },
    {
        name : 'oat meal',
        details : 'Oat meal is a slow release carbohydrate, considered hypo-allergenic.'
    },
    {
        name : 'rolled oats',
        details : 'Rolled oats are a source of beta-glucans to promote digestive health and immune support.'
    },
    {
        name : 'rye',
        details : 'Rye is a cereal grain that has a low glycemic index. It provides a good source of dietary fiber and minerals.'
    },
    {
        name : 'corn',
        details : 'Corn is used as a natural source of carbohydrates that helps fuel your pet’s body for healthy energy. It also contains linoleic acid, an omega-6 fatty acid, for healthy skin and a shiny coat, and is a source of protein for strong muscles.'
    }
];

const supplements = [
    {
        name : 'biotin',
        details : 'Biotin is a B vitamin needed to help your pet’s body convert food into energy. It’s best known for its connection to skin and coat health.'
    },
    {
        name : 'calcium pantothenate',
        details : 'Calcium pantothenate is an essential B vitamin needed to help your pet metabolize carbohydrates, protein and fat.'
    },
    {
        name : 'taurine',
        details : 'Taurine is an amino acid that’s essential in helping your cat see clearly and maintain healthy vision. It also contributes to a cat‘s heart health and healthy digestion.'
    },
    {
        name : 'yeast extract',
        details : 'Yeast extract is a source of prebiotic mannan-oligosaccharides.'
    },
    {
        name : 'sodium tripolyphosphate',
        details : 'Sodium tripolyphosphate promotes dental health: binds calcium making it unavailable for tartar formation.'
    },
    {
        name : 'magnesium sulfate',
        details : 'Magnesium sulfate is a source of magnesium essential for overall body health including heart health, muscle contraction and strong bones.'
    },
    {
        name : 'choline chloride',
        details : 'Choline chloride is a vitamin that’s naturally found in animal and plant sources like eggs, liver, fish, meat and soybeans. It’s essential in supporting your pet’s proper liver function and metabolism.'
    },
    {
        name : 'vitamin B12',
        details : 'Vitamin B12 supplement is a source of vitamin B-12, a nutrient that is essential in blood formation and helping your pet metabolize carbohydrates.'
    },
    {
        name : 'zinc sulfate',
        details : 'Zinc sulfate is a source of zinc, an essential mineral. It is needed to promote healthy skin and a shiny coat. It also helps support a healthy immune system and aids in the metabolism of carbohydrates, fat and protein.'
    },
    {
        name : 'calcium phosphate',
        details : 'Calcium phosphate is a source of calcium and phosphorus – essential minerals that help strengthen your pet’s teeth and bones.'
    }
];

module.exports = {
    meat,
    vegetablesAndFruits,
    grains,
    supplements
};