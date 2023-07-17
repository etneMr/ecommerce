import {
    ImageProduct1,
    ImageProduct2,
    ImageProduct3,
    ImageProduct4,
    ImageProduct5,
    ImageProduct6,
    ImageProduct7,
    ImageProduct8,

    MainImage,
    MainImage2
} from "./index";

export const listShoppingProducts = [
    {
        name: "Asgaard sofa",
        price: 2500000,
        quantity: 1,
        currency: "Rp",
        imageSrc: MainImage,
        id: "product-99",
        views: 204,
        star: 4.7,
        info: {
            general: {
                name: "General",
                value: [
                    {
                        name: "Sales Package",
                        value: "1 sectional sofa"
                    },
                    {
                        name: "Model Number",
                        value: "TFCBLIGRBL6SRHS"
                    }, {
                        name: "Secondary Material",
                        value: "Solid Wood"
                    }, {
                        name: "Configuration",
                        value: "L-shaped"
                    }, {
                        name: "Upholstery Material",
                        value: "Fabric + Cotton"
                    }, {
                        name: "Upholstery Color",
                        value: "Fabric + Cotton"
                    },
                ],
            },
            product: {
                name: "Product",
                value: [
                    {
                        name: "Filling Material",
                        value: "Foam"
                    },
                    {
                        name: "Finish Type",
                        value: "Bright Grey & Lion"
                    }, {
                        name: "Adjustable Headrest",
                        value: "No"
                    }, {
                        name: "Maximum Load Capacity",
                        value: "280 KG"
                    }, {
                        name: "Origin of Manufacture",
                        value: "India"
                    }
                ],
            },
            dimensions: {
                name: "Dimensions",
                value: [
                    {
                        name: "Width",
                        value: "265.32 cm"
                    },
                    {
                        name: "Height",
                        value: "76 cm"
                    }, {
                        name: "Depth",
                        value: "167.76 cm"
                    }, {
                        name: "Weight",
                        value: "45 KG"
                    }, {
                        name: "Seat Height",
                        value: "41.52 cm"
                    }, {
                        name: "Leg Height",
                        value: "5.46 cm"
                    },
                ],
            },
            warranty: {
                name: "Warranty",
                value: [
                    {
                        name: "Warranty Summary",
                        value: "1 Year Manufacturing Warranty"
                    },
                    {
                        name: "Warranty Service Type",
                        value: "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com"
                    }, {
                        name: "Covered in Warranty",
                        value: "Warranty Against Manufacturing Defect"
                    }, {
                        name: "Not Covered in Warranty",
                        value: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage."
                    }, {
                        name: "Domestic Warranty",
                        value: "1 Year"
                    }
                ]
            }
        }
    },
    {
        name: "Casaliving Wood",
        price: 2500000,
        quantity: 1,
        currency: "Rp",
        imageSrc: MainImage2,
        id: "product-100",
        views: 145,
        star: 4.2,
        info: {
            general: {
                name: "General",
                value: [
                    {
                        name: "Sales Package",
                        value: "1 Three Seater, 2 Single Seater"
                    },
                    {
                        name: "Model Number",
                        value: "DTUBLIGRBL568"
                    }, {
                        name: "Secondary Material",
                        value: "Solid Wood"
                    }, {
                        name: "Configuration",
                        value: "L-shaped"
                    }, {
                        name: "Upholstery Material",
                        value: "Fabric + Cotton"
                    }, {
                        name: "Upholstery Color",
                        value: "Bright Grey & Lion"
                    },
                ],
            },
            product: {
                name: "Product",
                value: [
                    {
                        name: "Filling Material",
                        value: "Matte"
                    },
                    {
                        name: "Finish Type",
                        value: "Bright Grey & Lion"
                    }, {
                        name: "Adjustable Headrest",
                        value: "yes"
                    }, {
                        name: "Maximum Load Capacity",
                        value: "300 KG"
                    }, {
                        name: "Origin of Manufacture",
                        value: "India"
                    }
                ],
            },
            dimensions: {
                name: "Dimensions",
                value: [
                    {
                        name: "Width",
                        value: "265.32 cm"
                    },
                    {
                        name: "Height",
                        value: "76 cm"
                    }, {
                        name: "Depth",
                        value: "167.76 cm"
                    }, {
                        name: "Weight",
                        value: "65 KG"
                    }, {
                        name: "Seat Height",
                        value: "41.52 cm"
                    }, {
                        name: "Leg Height",
                        value: "5.46 cm"
                    },
                ],
            },
            warranty: {
                name: "Warranty",
                value: [
                    {
                        name: "Warranty Summary",
                        value: "1.2 Year Manufacturing Warranty"
                    },
                    {
                        name: "Warranty Service Type",
                        value: "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com"
                    }, {
                        name: "Covered in Warranty",
                        value: "Warranty of the product is limited to manufacturing defects only."
                    }, {
                        name: "Not Covered in Warranty",
                        value: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage."
                    }, {
                        name: "Domestic Warranty",
                        value: "3 Months"
                    }
                ]
            }
        }
    }
]

export const listRelatedProducts = [
    {
        name: "Syltherine",
        describe: "Stylish cafe chair",
        price: 2500000,
        basePrice: 3500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.3,
        },
        imageSrc: ImageProduct1,
        id: "product-1",
    },
    {
        name: "Leviosa",
        describe: "Stylish cafe chair",
        price: 2500000,
        basePrice: 2500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: undefined,
        },
        imageSrc: ImageProduct2,
        id: "product-2",
    }, {
        name: "Lolito",
        describe: "Luxury big sofa",
        price: 7000000,
        basePrice: 14000000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.5,
        },
        imageSrc: ImageProduct3,
        id: "product-3",
    }, {
        name: "Respira",
        describe: "Outdoor bar table and stool",
        price: 500000,
        basePrice: 500000,
        currency: "Rp",
        status: {
            isNew: true,
            discount: undefined,
        },
        imageSrc: ImageProduct4,
        id: "product-4",
    }];

export const listProducts = [
    {
        name: "Syltherine",
        describe: "Stylish cafe chair",
        price: 2500000,
        basePrice: 3500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.3,
        },
        imageSrc: ImageProduct1,
        id: "product-1",
    },
    {
        name: "Leviosa",
        describe: "Stylish cafe chair",
        price: 2500000,
        basePrice: 2500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: undefined,
        },
        imageSrc: ImageProduct2,
        id: "product-2",
    }, {
        name: "Lolito",
        describe: "Luxury big sofa",
        price: 7000000,
        basePrice: 14000000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.5,
        },
        imageSrc: ImageProduct3,
        id: "product-3",
    }, {
        name: "Respira",
        describe: "Outdoor bar table and stool",
        price: 500000,
        basePrice: 500000,
        currency: "Rp",
        status: {
            isNew: true,
            discount: undefined,
        },
        imageSrc: ImageProduct4,
        id: "product-4",
    }, {
        name: "Grifo",
        describe: "Night lamp",
        price: 1500000,
        basePrice: 1500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: undefined,
        },
        imageSrc: ImageProduct5,
        id: "product-5",
    }, {
        name: "Muggo",
        describe: "Small mug",
        price: 150000,
        basePrice: 150000,
        currency: "Rp",
        status: {
            isNew: true,
            discount: undefined,
        },
        imageSrc: ImageProduct6,
        id: "product-6",
    }, {
        name: "Pingky",
        describe: "Cute bed set",
        price: 7000000,
        basePrice: 14000000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.5,
        },
        imageSrc: ImageProduct7,
        id: "product-7",
    }, {
        name: "Potty",
        describe: "Minimalist flower pot",
        price: 500000,
        basePrice: 500000,
        currency: "Rp",
        status: {
            isNew: true,
            discount: undefined,
        },
        imageSrc: ImageProduct8,
        id: "product-8",
    },
    {
        name: "Syltherine",
        describe: "Stylish cafe chair",
        price: 2500000,
        basePrice: 3500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.3,
        },
        imageSrc: ImageProduct1,
        id: "product-9",
    },
    {
        name: "Leviosa",
        describe: "Stylish cafe chair",
        price: 2500000,
        basePrice: 2500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: undefined,
        },
        imageSrc: ImageProduct2,
        id: "product-10",
    }, {
        name: "Lolito",
        describe: "Luxury big sofa",
        price: 7000000,
        basePrice: 14000000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.5,
        },
        imageSrc: ImageProduct3,
        id: "product-11",
    }, {
        name: "Respira",
        describe: "Outdoor bar table and stool",
        price: 500000,
        basePrice: 500000,
        currency: "Rp",
        status: {
            isNew: true,
            discount: undefined,
        },
        imageSrc: ImageProduct4,
        id: "product-12",
    }, {
        name: "Grifo",
        describe: "Night lamp",
        price: 1500000,
        basePrice: 1500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: undefined,
        },
        imageSrc: ImageProduct5,
        id: "product-13",
    }, {
        name: "Muggo",
        describe: "Small mug",
        price: 150000,
        basePrice: 150000,
        currency: "Rp",
        status: {
            isNew: true,
            discount: undefined,
        },
        imageSrc: ImageProduct6,
        id: "product-14",
    }, {
        name: "Pingky",
        describe: "Cute bed set",
        price: 7000000,
        basePrice: 14000000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.5,
        },
        imageSrc: ImageProduct7,
        id: "product-15",
    }, {
        name: "Potty",
        describe: "Minimalist flower pot",
        price: 500000,
        basePrice: 500000,
        currency: "Rp",
        status: {
            isNew: true,
            discount: undefined,
        },
        imageSrc: ImageProduct8,
        id: "product-16",
    },
    {
        name: "Syltherine",
        describe: "Stylish cafe chair",
        price: 2500000,
        basePrice: 3500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.3,
        },
        imageSrc: ImageProduct1,
        id: "product-17",
    },
    {
        name: "Leviosa",
        describe: "Stylish cafe chair",
        price: 2500000,
        basePrice: 2500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: undefined,
        },
        imageSrc: ImageProduct2,
        id: "product-18",
    }, {
        name: "Lolito",
        describe: "Luxury big sofa",
        price: 7000000,
        basePrice: 14000000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.5,
        },
        imageSrc: ImageProduct3,
        id: "product-19",
    }, {
        name: "Respira",
        describe: "Outdoor bar table and stool",
        price: 500000,
        basePrice: 500000,
        currency: "Rp",
        status: {
            isNew: true,
            discount: undefined,
        },
        imageSrc: ImageProduct4,
        id: "product-20",
    }, {
        name: "Grifo",
        describe: "Night lamp",
        price: 1500000,
        basePrice: 1500000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: undefined,
        },
        imageSrc: ImageProduct5,
        id: "product-21",
    }, {
        name: "Muggo",
        describe: "Small mug",
        price: 150000,
        basePrice: 150000,
        currency: "Rp",
        status: {
            isNew: true,
            discount: undefined,
        },
        imageSrc: ImageProduct6,
        id: "product-22",
    }, {
        name: "Pingky",
        describe: "Cute bed set",
        price: 7000000,
        basePrice: 14000000,
        currency: "Rp",
        status: {
            isNew: false,
            discount: 0.5,
        },
        imageSrc: ImageProduct7,
        id: "product-23",
    }, {
        name: "Potty",
        describe: "Minimalist flower pot",
        price: 500000,
        basePrice: 500000,
        currency: "Rp",
        status: {
            isNew: true,
            discount: undefined,
        },
        imageSrc: ImageProduct8,
        id: "product-24",
    },
];