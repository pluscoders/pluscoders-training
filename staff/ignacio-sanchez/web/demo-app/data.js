function generateId() {
    return Math.random().toString(36).substring(2)
}

var users = [{
    id: generateId(),
    firstname: 'Ignacio',
    lastname: 'Sanchez',
    city: 'Tarragona',
    country: 'Spain',
    email: 'insago@gmail.com',
    password: '123123123'
}]

var vehicles = [{ "id": "FYF87", "name": "CUSTOM ’18 FORD MUSTANG GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYF87_W_19_003.png", "price": 124 }, { "id": "FYG74", "name": "’65 MUSTANG 2+2 FASTBACK", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYG74_W_19_003.png", "price": 122 }, { "id": "FYC26", "name": "'67 FORD MUSTANG COUPE", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYC26_C_19_003.png", "price": 116 }, { "id": "FYC72", "name": "MUSTANG FUNNY CAR", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYC72_W_19_003.png", "price": 100 }, { "id": "FYG44", "name": "2005 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYG44_C_003.png", "price": 102 }, { "id": "FYB67", "name": "Custom ’18 Ford Mustang GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYB67_W_18_003.png", "price": 122 }, { "id": "FYG17", "name": "'92 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYG17_C_003.png", "price": 104 }, { "id": "FYG30", "name": "2018 FORD MUSTANG GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYG30_c_19_003.png", "price": 116 }, { "id": "FYC53", "name": "'92 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYC53_c_19_003.png", "price": 104 }, { "id": "FYG46", "name": "'71 Mustang Funny Car", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYG46_C_19_003.png", "price": 106 }, { "id": "FYD37", "name": "2018 Ford Mustang GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYD37_c_19_003.png", "price": 116 }, { "id": "FYG25", "name": "'65 Mustang 2+2 Fastback", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYG25_W_19_003.png", "price": 122 }, { "id": "FYC43", "name": "’71 MUSTANG FUNNY CAR", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYC43_w_19_003.png", "price": 106 }, { "id": "FYD08", "name": "’65 MUSTANG 2+2 FASTBACK", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYD08_w_19_003.png", "price": 120 }, { "id": "FYC31", "name": "'05 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYC31_w_18_003.png", "price": 104 }, { "id": "FYC92", "name": "’71 MUSTANG MACH 1", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FYC92_w_18_003.png", "price": 108 }, { "id": "FKB11", "name": "2018 FORD MUSTANG GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FKB11_c_18_003.png", "price": 108 }, { "id": "FJY90", "name": "67 Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FJY90_C_003.png", "price": 94 }, { "id": "FJY92", "name": "07 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FJY92_c_18_003.png", "price": 126 }, { "id": "FKB04", "name": "2015 FORD MUSTANG GT CONVERTIBLE", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FKB04_w_18_003.png", "price": 136 }, { "id": "FKB96", "name": "Custom '15 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FKB96_w_18_003.png", "price": 120 }, { "id": "FJY35", "name": "2015 Ford Mustang GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FJY35_w_18_003.png", "price": 122 }, { "id": "FJX74", "name": "2015 FORD MUSTANG GT CONVERTIBLE", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FJX74_c_18_003.png", "price": 138 }, { "id": "FJV78", "name": "2018 FORD MUSTANG GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FJV78_c_18_003.png", "price": 110 }, { "id": "FJY69", "name": "Custom '15 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FJY69_c_18_003.png", "price": 120 }, { "id": "FKC17", "name": "2015 Ford Mustang GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FKC17_c_18_003.png", "price": 106 }, { "id": "FKB39", "name": "68 Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FKB39_c_18_003.png", "price": 78 }, { "id": "FJX57", "name": "07 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FJX57_c_18_003.png", "price": 126 }, { "id": "FKB80", "name": "67 Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FKB80_c_18_003.png", "price": 94 }, { "id": "FJW53", "name": "68 Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FJW53_c_18_003.png", "price": 78 }, { "id": "FTX87", "name": "Custom '67 Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FTX87_c_18_003.png", "price": 136 }, { "id": "FJW44", "name": "2015 Ford Mustang GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FJW44_c_18_003.png", "price": 122 }, { "id": "FJX95", "name": "Custom '15 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FJX95_c_18_003.png", "price": 114 }, { "id": "FJX91", "name": "67 Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/FJX91_c_18_003.png", "price": 90 }, { "id": "DTY65", "name": "2005 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DTY65_c_17_003.png", "price": 104 }, { "id": "DVB35", "name": "68 Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DVB35_c_17_003.png", "price": 78 }, { "id": "DVB42", "name": "2015 Mustang GT Convertible", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DVB42_c_17_003.png", "price": 126 }, { "id": "DTX47", "name": "1968 Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DTX47_c_17_003.png", "price": 80 }, { "id": "DTW81", "name": "2015 Mustang GT Convertible", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DTW81_c_17_003.png", "price": 124 }, { "id": "DVG76", "name": "'67 Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DVG76_C_16_002.png", "price": 112 }, { "id": "DHR91", "name": "07 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DHR91_c_16_003.png", "price": 120 }, { "id": "DHX69", "name": "07 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DHX69_c_16_003.png", "price": 126 }, { "id": "DHN93", "name": "05 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DHN93_c_16_003.png", "price": 136 }, { "id": "DHX15", "name": "'05 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DHX15_c_16_003.png", "price": 138 }, { "id": "DHP90", "name": "13 Ford Mustang GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DHP90_c_16_003.png", "price": 140 }, { "id": "DHP85", "name": "2010 Ford Mustang GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DHP85_c_16_003.png", "price": 144 }, { "id": "DHP39", "name": "Custom '12 Ford Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DHP39_c_16_003.png", "price": 128 }, { "id": "DHR32", "name": "2015 Ford Mustang GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DHR32_c_16_003.png", "price": 138 }, { "id": "DHX36", "name": "2015 Ford Mustang GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DHX36_c_16_003.png", "price": 136 }, { "id": "DHX98", "name": "2015 Ford Mustang GT", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DHX98_c_16_003.png", "price": 136 }, { "id": "DHX25", "name": "2016 Ford Mustang Shelby GT350R", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DHX25_c_16_003.png", "price": 154 }, { "id": "DHP04", "name": "2016 Ford Mustang Shelby GT350R", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DHP04_c_16_003.png", "price": 156 }, { "id": "DHR25", "name": "2015 Custom Mustang", "thumbnail": "https://media.mattel.com/root/HWCarsCatalog/Web/Thumbnail/DHR25_c_16_003.png", "price": 134 }]