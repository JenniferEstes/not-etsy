business_1 = Business.create(name: "NataliyaBusinka")
category_1 = Category.create(name: "jewelry")
product_1 = Product.new(name: 'Porcelain Tile Earrings', price: 35, image: "https://i.etsystatic.com/10792065/d/il/300b41/2754862901/il_340x270.2754862901_ccn4.jpg?version=0")
product_1.business = business_1
product_1.category = category_1
product_1.save

business_2 = Business.create(name: "ArtWindStudio")
category_2 = Category.create(name: "wall art")
product_2 = Product.new(name: "Large Abstract Acrylic Painting", price: 115, image: "https://i.etsystatic.com/19920185/c/1612/1282/227/192/il/559cd6/3074384744/il_340x270.3074384744_5184.jpg")
product_2.business = business_2
product_2.category = category_2
product_2.save

business_3 = Business.create(name: "GRAINandGRIT")
category_3 = Category.create(name: "wall art")
product_3 = Product.new(name: "6 Hexagon Shelves", price: 150, image:"https://i.etsystatic.com/13977065/c/944/750/0/0/il/433661/2298119769/il_340x270.2298119769_asa8.jpg")
product_3.business = business_3
product_3.category = category_3
product_3.save

business_4 = Business.create(name: "NikisMosaic")
category_4 = Category.create(name: "wall art")
product_4 = Product.new(name: "Mosaic Landscape with Stained Glass", price: 317, image:"https://i.etsystatic.com/9392590/r/il/111933/1908542428/il_340x270.1908542428_ezo5.jpg")
product_4.business = business_4
product_4.category = category_4
business_4.save

business_5 = Business.create(name: "stitchandstonedesign")
category_5 = Category.create(name: "jewelry")
product_5 = Product.new(name: "Confetti Tortoise Shell Geometric Statement Earrings", price: 33, image:"https://i.etsystatic.com/6649757/r/il/f019e2/2514615482/il_340x270.2514615482_f2j7.jpg")
product_5.business = business_5
product_5.category = category_5
product_5.save

business_6 = Business.create(name: "OlaHolaHola")
category_6 = Category.create(name: "wall art")
product_6 = Product.new(name: "Antique Floral Print of Dutch Still Life Oil Painting", price: 35, image:"https://i.etsystatic.com/8418925/r/il/0abbfd/1526805412/il_340x270.1526805412_r7z4.jpg")
product_6.business = business_6
product_6.category = category_6
product_6.save

business_7 = Business.create(name: "EssentiallyCharlie")
category_7 = Category.create(name: "candle")
product_7 = Product.new(name: "Beeswax & Coconut Oil Candle: Plant Kween", price: 18, image:"https://i.etsystatic.com/13397113/r/il/063a80/2861060036/il_340x270.2861060036_hh2u.jpg")
product_7.business = business_7
product_7.category = category_7
product_7.save

business_8 = Business.create(name: "EssentiallyCharlie")
category_8 = Category.create(name: "candle")
product_8 = Product.new(name: "Beeswax & Coconut Oil Candle: Palmarosa", price: 18, image:"https://i.etsystatic.com/13397113/r/il/7ba99a/2827903924/il_340x270.2827903924_l5t2.jpg")
product_8.business = business_8
product_8.category = category_8
product_8.save

business_9 = Business.create(name: "HEARTSinCOLORS")
category_9 = Category.create(name: "wall art")
product_9 = Product.new(name: "Set of 3 Printable Prints", price: 14, image:"https://i.etsystatic.com/12544739/r/il/c37fa7/1560674255/il_340x270.1560674255_gy7j.jpg")
product_9.business = business_9
product_9.category = category_9
product_9.save

business_10 = Business.create(name: "Visionary DesignC")
category_10 = Category.create(name: "wall art")
product_10 = Product.new(name: "Large Floral Crescent Moon Wood Wall Decor", price: 85, image:"https://i.etsystatic.com/14399255/r/il/ad35a2/2188036913/il_340x270.2188036913_9mbi.jpg")
product_10.business = business_10
product_10.category = category_10
product_10.save

business_11 = Business.create(name: "ThreeDimensionPrints")
category_11 = Category.create(name: "planter")
product_11 = Product.new(name: "Glow In The Dark Kodama Succulent Planter", price: 11, image:"https://i.etsystatic.com/24216926/r/il/60ca90/2520625147/il_340x270.2520625147_5uqw.jpg")
product_11.business = business_11
product_11.category = category_11
product_11.save

business_12 = Business.create(name: "loopdesignstudio")
category_12 = Category.create(name: "planter")
product_12 = Product.new(name: "Small Indoor Hanging planter", price: 54, image:"https://i.etsystatic.com/6411105/d/il/16a4d7/2355051600/il_340x270.2355051600_3kes.jpg?version=0", favorite: true)
product_12.business = business_12
product_12.category = category_12
product_12.save

