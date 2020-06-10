CREATE TABLE `users` (
	`id` int NOT NULL AUTO_INCREMENT,
	`username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`firstName` varchar(255) NOT NULL,
	`lastName` varchar(255) NOT NULL,
	`sex` varchar(255) NOT NULL,
	`age` int(3) NOT NULL,
	`password` varchar(255) NOT NULL,
	`created_at` timestamp NULL DEFAULT NULL,
	`role` ENUM ('user', 'administrator') DEFAULT 'user' NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO
	`users` (
		`id`,
		`username`,
		`email`,
		`firstName`,
		`lastName`,
		`sex`,
		`age`,
		`password`,
		`created_at`,
		`role`
	)
VALUES
	(
		1,
		"administrator",
		"admin@gmail.com",
		"admin",
		"ssu",
		"male",
		20,
		"$2y$08$4s//PeRn9zewwlA460aAkO9ZJ2G.l9dPEBYiJdG7Nz49Gwxkt8IBO",
		"2020-04-23 05:57:23",
		"administrator"
	),
	(
		2,
		"user",
		"user@gmail.com",
		"Vladislav",
		"Godunov",
		"male",
		20,
		"$2y$08$q4pIbCVRH3XFDU6OaLkbQO/GbgBCF1vP6B0zSTLwVuNG/93rfrWna",
		"2020-04-23 05:57:23",
		"user"
	),
	(
		3,
		"user2",
		"anton@gmail.com",
		"Anton",
		"Promni",
		"male",
		20,
		"$2y$08$q4pIbCVRH3XFDU6OaLkbQO/GbgBCF1vP6B0zSTLwVuNG/93rfrWna",
		"2020-04-23 05:57:23",
		"user"
	),
	(
		4,
		"user3",
		"nikon@gmail.com",
		"Denis",
		"Nikon",
		"male",
		20,
		"$2y$08$q4pIbCVRH3XFDU6OaLkbQO/GbgBCF1vP6B0zSTLwVuNG/93rfrWna",
		"2020-04-23 05:57:23",
		"user"
	),
	(
		5,
		"user4",
		"dasha@gmail.com",
		"Dasha",
		"Nokia",
		"female",
		20,
		"$2y$08$q4pIbCVRH3XFDU6OaLkbQO/GbgBCF1vP6B0zSTLwVuNG/93rfrWna",
		"2020-04-23 05:57:23",
		"user"
	);

CREATE TABLE `products` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`price` FLOAT NOT NULL,
	`in_stock` INT NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO
	`products` (
		`id`,
		`name`,
		`price`,
		`in_stock`
	)
VALUES
	(
		1,
		"AA 1.5 Volt Performance Alkaline Batteries - Pack of 48",
		1299,
		100
	),
	(
		2,
		"Logitech USB Headset H390 with Noise Cancelling Mic",
		400,
		200
	),
	(
		3,
		"Acer Aspire 5 Slim Laptop, 15.6 inches",
		13200,
		100
	),
	(
		4,
		"WD 2TB Elements Portable External Hard Drive",
		200,
		300
	),
	(5, "TP-Link AC1750 Smart WiFi Router", 3200, 500),
	(
		6,
		"Stainless Steel Cake Chocolate Scraper Spatula Dough Cutter",
		200,
		1200
	),
	(7, "Bear Plush Toy", 300, 120),
	(8, "Pearl Necklace", 20, 200),
	(
		9,
		"Styling tools hair curling iron straightening machine",
		3200,
		100
	),
	(10, "In Stock Xiaomi Mi Band 4", 550, 100),
	(
		11,
		"Volcano Chocolate Mold Polycarbonate Plastic",
		30,
		200
	),
	(
		12,
		"2020 New Family Look Mother Daughter Dresses",
		700,
		100
	),
	(13, "6Pcs/Set Plastic Cake Turntable", 330, 100),
	(
		14,
		"DIY Baking Supplies Shaving Cutter",
		70,
		300
	),
	(15, "10pcs/set Edible Pigment Pen", 160, 100),
	(
		16,
		"26cm/10inch LED Selfie Ring Light",
		200,
		100
	),
	(17, "5pcs Baking Measuring Cups", 300, 100),
	(
		18,
		"Shockproof Armor Kickstand Phone Case",
		80,
		400
	),
	(
		19,
		"Nepoagym RHYTHM Women Yoga Leggings",
		500,
		100
	),
	(20, "MALEMONKEY 831645 Women Sneakers", 800, 100),
	(21, "DEKO 220V 26mm Rotary Hammer", 3200, 100),
	(
		22,
		"NAVIFORCE Men Watches Waterproof Stainless",
		600,
		100
	),
	(
		23,
		"3x1/3x3/6x3m LED Icicle String Lights",
		800,
		100
	),
	(
		24,
		"Simplee Casual outfits women's two piece suits",
		900,
		100
	),
	(25, "Nail Set UV LED Lamp Dryer", 3700, 100),
	(
		26,
		"SDETER 1080P 720P IP Camera Security Camera WiFi",
		4200,
		100
	),
	(
		27,
		"5 Pairs Cotton Women Socks Solid Snowflake Softable",
		300,
		1040
	),
	(
		28,
		"High Waist Bikini Leopard Swimsuit",
		700,
		100
	),
	(
		29,
		"34 * 22CM 50PCS DIY Handmade food chocolate",
		30,
		100
	),
	(30, "SeaKnight TriPoseidon 300M", 200, 100),
	(
		31,
		"2020 5PCS/Lot Baby Boys Clothes Unicorn Girls",
		800,
		1020
	),
	(
		32,
		"Mayitr 1pc Sock Slider Aid Blue Helper",
		270,
		100
	),
	(
		33,
		"custom made Car floor mats for bmw",
		800,
		100
	),
	(
		34,
		"CRRJU Fashion Mens Watches Top Brand Luxury",
		290,
		100
	),
	(
		35,
		"[LFMB]Famous Brand Belt Men Top Quality",
		400,
		100
	),
	(
		36,
		"Outdoor Mini Gas Cigarette Lighters Key",
		210,
		100
	),
	(
		37,
		"Fondant Cake Mold Set Flower Cake Decorating Tools",
		380,
		100
	),
	(
		38,
		"Memory Foam Bedding Pillow Neck protection",
		1400,
		100
	),
	(
		39,
		"Led flashlight Ultra Bright torch T6/L2/V6 Camping light",
		380,
		120
	),
	(
		40,
		"Ugreen USB Type C Cable for Samsung",
		40,
		100
	),
	(41, "Cosplay Queen Elsa Dresses", 600, 100),
	(42, "Long Push Rubber Broom Bristles", 260, 100),
	(
		43,
		"UncleJerry Size 25-47 New Summer Led Fiber Optic Shoes",
		3200,
		100
	),
	(
		44,
		"KINGSEVEN Men Polarized Sunglasses",
		500,
		100
	),
	(
		45,
		"Sougayilang Fishing Rod Combo 1.8m",
		3700,
		100
	),
	(
		46,
		"Ab Power Wheel Roller Crossfit Home Gym",
		4300,
		100
	),
	(
		47,
		"Naturehike Sleeping Pad with Inflatable bag",
		840,
		100
	),
	(
		48,
		"APG Portable Folding Barbecue Stove Barbecue Oven",
		2900,
		170
	),
	(
		49,
		"2 Pcs Seamless Workout Clothes For Women",
		2200,
		100
	),
	(
		50,
		"iGPSPORT iGS20E Bicycle Rechargeable Computer",
		700,
		100
	),
	(
		51,
		"BISON DENIM Men Genuine Sheepskin Leather Gloves",
		300,
		150
	),
	(52, "FONEX Titanium Alloy Glasses", 200, 100),
	(
		53,
		"Peineili Sex Delay Spray for Men Male",
		100,
		100
	),
	(54, "Rainbow Kite Long Tail", 230, 100),
	(
		55,
		"Acrylic Nail Art Kit Manicure Set",
		3700,
		100
	),
	(
		56,
		"Jessup brushes Pearl White/Rose Gold Makeup brushes",
		900,
		100
	),
	(
		57,
		"Baby Stroller 3 in 1 luxury umbrella baby",
		3200,
		100
	),
	(
		58,
		"LANBENA Peptide Anti Wrinkle Facial",
		90,
		100
	),
	(
		59,
		"Abody Hair Brush Magic Hair Comb Detangling Hair",
		700,
		100
	),
	(
		60,
		"IMAGIC Waterproof 16 Colors Glossy Lipstick",
		269,
		100
	);

CREATE TABLE `categories` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO
	`categories` (`id`, `name`)
VALUES
	(1, "Automotive and Transport"),
	(2, "Business and Finance"),
	(3, "Chemicals and Materials"),
	(4, "Consumer Goods and Services"),
	(5, "Energy and Natural Resources"),
	(6, "Food and Beverage"),
	(7, "Government and Public Sector"),
	(8, "Healthcare"),
	(9, "Humanities Books"),
	(10, "Manufacturing and Construction"),
	(11, "Military Aerospace and Defense"),
	(12, "Pharmaceuticals"),
	(13, "Science Books"),
	(14, "Telecommunications and Computing");

CREATE TABLE `product_categories` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`product_id` INT NOT NULL,
	`category_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO
	`product_categories` (`id`, `product_id`, `category_id`)
VALUES
	(1, 1, 5),
	(2, 2, 14),
	(3, 3, 4),
	(4, 4, 14),
	(5, 5, 14),
	(6, 6, 6),
	(7, 7, 4),
	(8, 8, 4),
	(9, 9, 14),
	(10, 10, 14),
	(11, 11, 12),
	(12, 12, 8),
	(13, 13, 6),
	(14, 14, 4),
	(15, 15, 14),
	(16, 16, 3),
	(17, 17, 2),
	(18, 18, 2),
	(19, 19, 14),
	(20, 20, 12),
	(21, 21, 14),
	(22, 22, 2),
	(23, 23, 3),
	(24, 24, 3),
	(25, 25, 6),
	(26, 26, 8),
	(27, 27, 14),
	(28, 28, 12),
	(29, 29, 13),
	(30, 30, 2),
	(31, 31, 11),
	(32, 32, 1),
	(33, 33, 13),
	(34, 34, 12),
	(35, 35, 14),
	(36, 36, 5),
	(37, 37, 6),
	(38, 38, 2),
	(39, 39, 12),
	(40, 40, 7),
	(41, 41, 9),
	(42, 42, 4),
	(43, 43, 7),
	(44, 44, 8),
	(45, 45, 6),
	(46, 46, 1),
	(47, 47, 2),
	(48, 48, 3),
	(49, 49, 6),
	(50, 50, 8),
	(51, 51, 12),
	(52, 52, 14),
	(53, 53, 2),
	(54, 54, 3),
	(55, 55, 8),
	(56, 56, 12),
	(57, 57, 14),
	(58, 58, 12),
	(59, 59, 11),
	(60, 1, 2),
	(61, 2, 12),
	(62, 2, 3),
	(63, 3, 1),
	(64, 5, 8),
	(65, 6, 8),
	(66, 8, 4),
	(67, 9, 1),
	(68, 5, 3),
	(69, 6, 7),
	(70, 7, 11),
	(71, 9, 6);

CREATE TABLE `checks` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`date_created` TIMESTAMP NOT NULL,
	`price_total` FLOAT NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO
	`checks` (`id`, `user_id`, `date_created`, `price_total`)
VALUES
	(1, 1, "2020-06-03 05:57:23", 14000),
	(2, 2, "2020-06-03 05:57:23", 14200),
	(3, 3, "2020-06-03 05:57:23", 400),
	(4, 4, "2020-06-05 05:57:23", 6400),
	(5, 2, "2020-06-08 05:57:23", 400),
	(6, 3, "2020-06-09 05:57:23", 600),
	(7, 1, "2020-06-07 05:57:23", 100),
	(8, 2, "2020-06-08 05:57:23", 6400),
	(9, 5, "2020-06-07 05:57:23", 1100),
	(10, 4, "2020-06-06 05:57:23", 60),
	(11, 2, "2020-06-08 05:57:23", 1400),
	(12, 3, "2020-06-08 05:57:23", 660),
	(13, 1, "2020-06-08 05:57:23", 140),
	(14, 1, "2020-06-03 05:57:23", 320),
	(15, 2, "2020-06-02 05:57:23", 1000),
	(16, 1, "2020-06-05 05:57:23", 600);

CREATE TABLE `check_item` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`check_id` INT NOT NULL,
	`product_id` INT NOT NULL,
	`quantity` INT NOT NULL,
	`price_per_unit` FLOAT NOT NULL,
	`status` varchar(255) NOT NULL DEFAULT 'paid',
	PRIMARY KEY (`id`)
);

INSERT INTO
	`check_item` (
		`id`,
		`check_id`,
		`product_id`,
		`quantity`,
		`price_per_unit`,
		`status`
	)
VALUES
	(1, 1, 2, 2, 400, 'paid'),
	(2, 1, 3, 1, 13200, 'paid'),
	(3, 2, 3, 1, 13200, 'paid'),
	(4, 2, 4, 5, 200, 'paid'),
	(5, 3, 4, 2, 200, 'paid'),
	(6, 4, 5, 2, 3200, 'paid'),
	(7, 5, 6, 2, 200, 'paid'),
	(8, 6, 7, 2, 300, 'paid'),
	(9, 7, 8, 5, 20, 'paid'),
	(10, 8, 9, 2, 3200, 'paid'),
	(11, 9, 10, 2, 550, 'paid'),
	(12, 10, 11, 2, 30, 'paid'),
	(13, 11, 12, 2, 700, 'paid'),
	(14, 12, 13, 2, 330, 'paid'),
	(15, 13, 14, 2, 70, 'paid'),
	(16, 14, 15, 2, 160, 'paid'),
	(17, 15, 16, 5, 200, 'paid'),
	(18, 16, 17, 2, 300, 'paid');

ALTER TABLE
	`checks`
ADD
	CONSTRAINT `checks_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);

ALTER TABLE
	`check_item`
ADD
	CONSTRAINT `check_item_fk0` FOREIGN KEY (`check_id`) REFERENCES `checks`(`id`);

ALTER TABLE
	`check_item`
ADD
	CONSTRAINT `check_item_fk1` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`);

ALTER TABLE
	`product_categories`
ADD
	CONSTRAINT `product_categories_fk0` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`);

ALTER TABLE
	`product_categories`
ADD
	CONSTRAINT `product_categories_fk1` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`);