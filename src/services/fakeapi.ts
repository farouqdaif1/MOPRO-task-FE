const devices = [
    { "deviceuuid": "R52N919K8GY", "handlerType": "android", "manufacturer": "samsung", "model": "SM-T870", "os": "12", "screen": { "size": "2560x1600", "wide": 2560, "narrow": 1600, "orientation": "3" }, "type": "tablet", "disabledUntil": 1670549969623 },
    { "os": "9", "deviceuuid": "5200a84b4e64a4d7", "model": "SM-A730F", "manufacturer": "samsung", "type": "phone", "screen": { "size": "2220x1080", "wide": 2220, "narrow": 1080, "orientation": "0" }, "handlerType": "android" },
    { "deviceuuid": "21091FDF6003AS", "handlerType": "android", "manufacturer": "Google", "model": "Pixel 6", "os": "12", "screen": { "size": "2400x1080", "wide": 2400, "narrow": 1080, "orientation": "0" }, "type": "phone" },
    { "os": "8", "deviceuuid": "5203dfd4fa2c7439", "manufacturer": "samsung", "model": "SM-J710MN", "type": "phone", "screen": { "size": "1280x720", "wide": 1280, "narrow": 720, "orientation": "3" }, "handlerType": "android" },
    { "os": "9", "deviceuuid": "ccb3078d", "model": "SM-J810M", "manufacturer": "samsung", "type": "phone", "screen": { "size": "1480x720", "wide": 1480, "narrow": 720 }, "handlerType": "android" },
    { "handlerType": "android", "os": "12", "deviceuuid": "R5CR60B1Y1X", "model": "SM-G998U1", "manufacturer": "samsung", "screen": { "size": "2400x1080", "wide": 2400, "narrow": 1080, "orientation": "0" }, "type": "phone" },
    { "deviceuuid": "16241FDD4000QW", "handlerType": "android", "manufacturer": "Google", "model": "Pixel 5", "os": "11", "screen": { "size": "2340x1080", "wide": 2340, "narrow": 1080, "orientation": "0" }, "type": "phone" },
    { "handlerType": "android", "os": "12", "deviceuuid": "R52R3098N3T", "model": "SM-P610", "manufacturer": "samsung", "screen": { "size": "2000x1200", "wide": 2000, "narrow": 1200, "orientation": "3" }, "type": "tablet" },
    { "handlerType": "android", "os": "9", "deviceuuid": "2c23b9ac660d7ece", "model": "SM-G8870", "manufacturer": "samsung", "screen": { "size": "2340x1080", "wide": 2340, "narrow": 1080, "orientation": "0" }, "type": "phone" },
    { "os": "8", "deviceuuid": "5203d38b52de2419", "model": "SM-T580", "manufacturer": "samsung", "type": "tablet", "screen": { "size": "1920x1200", "wide": 1920, "narrow": 1200, "orientation": "0" }, "handlerType": "android" },
    { "handlerType": "android", "os": "9", "deviceuuid": "HA0KZDQY", "model": "Lenovo TB-X505F", "manufacturer": "LENOVO", "screen": { "size": "1280x800", "wide": 1280, "narrow": 800, "orientation": "3" }, "type": "tablet" },
    { "handlerType": "android", "os": "12", "deviceuuid": "R5CR60A3H5V", "model": "SM-G998U1", "manufacturer": "samsung", "screen": { "size": "2400x1080", "wide": 2400, "narrow": 1080, "orientation": "0" }, "type": "phone" },
    { "handlerType": "android", "os": "9", "deviceuuid": "2c23c0e89a0d7ece", "model": "SM-G8870", "manufacturer": "samsung", "screen": { "size": "2340x1080", "wide": 2340, "narrow": 1080, "orientation": "0" }, "type": "phone" },
    { "deviceuuid": "HA10E951", "handlerType": "android", "manufacturer": "LENOVO", "model": "Lenovo TB-X505F", "os": "10", "screen": { "size": "1280x800", "wide": 1280, "narrow": 800, "orientation": "0" }, "type": "tablet" },
    { "handlerType": "android", "os": "10", "deviceuuid": "712KPPB1289424", "model": "Pixel 2 XL", "manufacturer": "Google", "screen": { "size": "2880x1440", "wide": 2880, "narrow": 1440, "orientation": "0" }, "type": "phone", "disabledUntil": 1670539931038 },
    { "deviceuuid": "HA10GYEL", "handlerType": "android", "manufacturer": "LENOVO", "model": "Lenovo TB-X505F", "os": "10", "screen": { "size": "1280x800", "wide": 1280, "narrow": 800, "orientation": "3" }, "type": "tablet" },
    { "deviceuuid": "52034adaee51a45f", "handlerType": "android", "manufacturer": "samsung", "model": "SM-T580", "os": "8", "screen": { "size": "1920x1200", "wide": 1920, "narrow": 1200, "orientation": "1" }, "type": "tablet" },
    { "deviceuuid": "5200fe93c0023535", "handlerType": "android", "manufacturer": "samsung", "model": "SM-A520F", "os": "8", "screen": { "size": "1920x1080", "wide": 1920, "narrow": 1080, "orientation": "0" }, "type": "phone" },
    { "deviceuuid": "5203a4a3eca4c427", "handlerType": "android", "manufacturer": "samsung", "model": "SM-T580", "os": "8", "screen": { "size": "1920x1200", "wide": 1920, "narrow": 1200, "orientation": "1" }, "type": "tablet" },
    { "handlerType": "android", "os": "9", "deviceuuid": "ROWM705PBZJ", "model": "SM-T295", "manufacturer": "samsung", "type": "tablet", "screen": { "size": "1280x800", "wide": 1280, "narrow": 800, "orientation": "3" } },
    { "deviceuuid": "16091FDD40032R", "handlerType": "android", "manufacturer": "Google", "model": "Pixel 5", "os": "13", "screen": { "size": "2340x1080", "wide": 2340, "narrow": 1080, "orientation": "0" }, "type": "phone" },
    { "deviceuuid": "5200fcafc01ab437", "handlerType": "android", "manufacturer": "samsung", "model": "SM-A520F", "os": "8", "screen": { "size": "1920x1080", "wide": 1920, "narrow": 1080, "orientation": "0" }, "type": "phone" },
    { "handlerType": "android", "os": "10", "deviceuuid": "HA0K248Z", "model": "Lenovo TB-X505F", "manufacturer": "LENOVO", "type": "tablet", "screen": { "size": "1280x800", "wide": 1280, "narrow": 800, "orientation": "3" } },
    { "deviceuuid": "R52N9129DNF", "handlerType": "android", "manufacturer": "samsung", "model": "SM-T870", "os": "12", "screen": { "size": "2560x1600", "wide": 2560, "narrow": 1600, "orientation": "3" }, "type": "tablet" },
    { "os": "8", "deviceuuid": "e865c0c986855f2b", "model": "SM-T380", "manufacturer": "samsung", "type": "tablet", "screen": { "size": "1280x800", "wide": 1280, "narrow": 800, "orientation": "3" }, "handlerType": "android" },
    { "deviceuuid": "R52N607VYVJ", "handlerType": "android", "manufacturer": "samsung", "model": "SM-T720", "os": "11", "screen": { "size": "2560x1600", "wide": 2560, "narrow": 1600, "orientation": "3" }, "type": "tablet" },
    { "handlerType": "android", "os": "11", "deviceuuid": "R52N90FAW8E", "model": "SM-T307U", "manufacturer": "samsung", "screen": { "size": "1920x1200", "wide": 1920, "narrow": 1200, "orientation": "3" }, "type": "tablet" },
    { "handlerType": "android", "os": "11", "deviceuuid": "ZY22BN6D6Q", "model": "moto g(9) power", "manufacturer": "motorola", "screen": { "size": "1640x720", "wide": 1640, "narrow": 720, "orientation": "0" }, "type": "phone" },
    { "handlerType": "android", "os": "10", "deviceuuid": "HA0KNM6U", "model": "Lenovo TB-X505F", "manufacturer": "LENOVO", "type": "tablet", "screen": { "size": "1280x800", "wide": 1280, "narrow": 800, "orientation": "3" } },
    { "handlerType": "android", "os": "11", "deviceuuid": "ZY22BMSHGR", "model": "moto g(9) power", "manufacturer": "motorola", "screen": { "size": "1640x720", "wide": 1640, "narrow": 720, "orientation": "0" }, "type": "phone" },
    { "deviceuuid": "21121FDF6006SJ", "handlerType": "android", "manufacturer": "Google", "model": "Pixel 6", "os": "13", "screen": { "size": "2400x1080", "wide": 2400, "narrow": 1080, "orientation": "0" }, "type": "phone" },
    { "deviceuuid": "R52N40KEFTT", "handlerType": "android", "manufacturer": "samsung", "model": "SM-T720", "os": "11", "screen": { "size": "2560x1600", "wide": 2560, "narrow": 1600, "orientation": "3" }, "type": "tablet" },
    { "handlerType": "android", "os": "11", "deviceuuid": "R52NC06PJ2M", "model": "SM-T307U", "manufacturer": "samsung", "screen": { "size": "1920x1200", "wide": 1920, "narrow": 1200, "orientation": "3" }, "type": "tablet" },
    { "deviceuuid": "68f8d3e5", "handlerType": "android", "manufacturer": "samsung", "model": "SM-J810M", "os": "10", "screen": { "size": "1480x720", "wide": 1480, "narrow": 720, "orientation": "0" }, "type": "phone" },
    { "handlerType": "android", "os": "10", "deviceuuid": "RF8M70AXBNT", "model": "SM-A102U", "manufacturer": "samsung", "type": "phone", "screen": { "size": "1560x720", "wide": 1560, "narrow": 720, "orientation": "0" } },
    { "handlerType": "android", "os": "10", "deviceuuid": "RF8M72M14GA", "model": "SM-A102U", "manufacturer": "samsung", "type": "phone", "screen": { "size": "1560x720", "wide": 1560, "narrow": 720, "orientation": "0" } },
    { "deviceuuid": "R52RB0809LY", "handlerType": "android", "manufacturer": "samsung", "model": "SM-P610", "os": "12", "screen": { "size": "2000x1200", "wide": 2000, "narrow": 1200, "orientation": "3" }, "type": "tablet" },
    { "os": "9", "deviceuuid": "B002904025816", "model": "ONA19TB002", "manufacturer": "JOYAR", "screen": { "size": "1280x800", "wide": 1280, "narrow": 800, "orientation": "0" }, "type": "tablet", "handlerType": "android" },
    { "handlerType": "android", "os": "8", "deviceuuid": "52037dabe23e3479", "model": "SM-J710MN", "manufacturer": "samsung", "type": "phone", "screen": { "size": "1280x720", "wide": 1280, "narrow": 720, "orientation": "0" } },
    { "os": "15", "type": "ipad", "deviceuuid": "53817790bd37bc14f026f528328d387ecebbe80d", "model": "iPad6_7", "model_full": "iPad Pro 12.9 (WiFi)", "manufacturer": "Apple", "handlerType": "ios", "screen": { "size": "2732x2048", "wide": 2732, "narrow": 2048 }, "disabledUntil": 1670538293663 },
    { "os": "15", "type": "ipad", "deviceuuid": "89d758cfb0005560966dae86dd157339496e3802", "model": "iPad5_1", "model_full": "iPad mini 4 (WiFi)", "manufacturer": "Apple", "screen": { "size": "2048x1536", "wide": 2048, "narrow": 1536 }, "handlerType": "ios" },
    { "os": "15", "type": "iphone", "deviceuuid": "580f70b234bd3102fd7b70a18a87d7ed63023e20", "model": "iPhone10_2", "model_full": "iPhone 8 Plus (Cell-Verizon)", "manufacturer": "Apple", "screen": { "size": "2208x1242", "wide": 2208, "narrow": 1242 }, "handlerType": "ios" },
    { "handlerType": "ios", "deviceuuid": "106f38ff7b2f09c6590cf005349c2f2d5bb21ba9", "manufacturer": "Apple", "model_full": "iPad Pro 9.7 (WiFi)", "model": "iPad6_3", "os": "15", "screen": { "size": "2048x1536", "wide": 2048, "narrow": 1536 }, "type": "ipad" },
    { "handlerType": "ios", "deviceuuid": "00008027-001550843A22002E", "manufacturer": "Apple", "model_full": "iPad Pro 12.9 (Cell, 3rd Gen)", "model": "iPad8_7", "os": "15", "screen": { "size": "2732x2048", "wide": 2732, "narrow": 2048 }, "type": "ipad" },
    { "handlerType": "ios", "deviceuuid": "11d3f146ea4d4c780e8326d106d96a9c0db38fb8", "manufacturer": "Apple", "model_full": "iPad 10.2 7th Gen (WiFi)", "model": "iPad7_12", "os": "15", "screen": { "size": "2160x1620", "wide": 2160, "narrow": 1620 }, "type": "ipad" },
    { "handlerType": "ios", "deviceuuid": "00008020-000A342A11E1002E", "manufacturer": "Apple", "model_full": "iPad Air (WiFi, 3rd Gen)", "model": "iPad11_3", "os": "15", "screen": { "size": "2224x1668", "wide": 2224, "narrow": 1668 }, "type": "ipad" },
    { "handlerType": "ios", "deviceuuid": "00008110-00022D903C42801E", "manufacturer": "Apple", "model_full": "iPhone 13", "model": "iPhone14_5", "os": "15", "screen": { "size": "2532x1170", "wide": 2532, "narrow": 1170 }, "type": "iphone" },
    { "handlerType": "ios", "deviceuuid": "00008110-001928642604801E", "manufacturer": "Apple", "model_full": "iPhone 13", "model": "iPhone14_5", "os": "15", "screen": { "size": "2532x1170", "wide": 2532, "narrow": 1170 }, "type": "iphone" },
    { "handlerType": "ios", "deviceuuid": "00008110-001C05C41486801E", "manufacturer": "Apple", "model_full": "iPhone 13 Pro", "model": "iPhone14_2", "os": "15", "screen": { "size": "2532x1170", "wide": 2532, "narrow": 1170 }, "type": "iphone" },
    { "handlerType": "ios", "deviceuuid": "00008027-001845E80E84002E", "manufacturer": "Apple", "model_full": "iPad Pro 12.9 (WiFi, 3rd Gen)", "model": "iPad8_5", "os": "15", "screen": { "size": "2732x2048", "wide": 2732, "narrow": 2048 }, "type": "ipad" },
    { "handlerType": "ios", "deviceuuid": "912602a780479e095dc4ace90fb88f84cb71d14e", "manufacturer": "Apple", "model_full": "iPhone 7 Plus", "model": "iPhone9_2", "os": "15", "screen": { "size": "2208x1242", "wide": 2208, "narrow": 1242 }, "type": "iphone" },
    { "handlerType": "ios", "deviceuuid": "56e56e7397c211de2abc89563eab62e578dfa7c9", "manufacturer": "Apple", "model_full": "iPad 9.7 (WiFi)", "model": "iPad6_11", "os": "15", "screen": { "size": "2048x1536", "wide": 2048, "narrow": 1536 }, "type": "ipad" },
    { "handlerType": "ios", "deviceuuid": "9f3875ecdf5bba65dac595dc197bd155a6794e7d", "manufacturer": "Apple", "model_full": "iPhone 7 Plus (Cell)", "model": "iPhone9_4", "os": "15", "screen": { "size": "2208x1242", "wide": 2208, "narrow": 1242 }, "type": "iphone" },
    { "handlerType": "ios", "deviceuuid": "fabb69b9c09a5f8fb93bbc523019d46b69b41198", "manufacturer": "Apple", "model_full": "iPhone 8 Plus (Cell-Verizon)", "model": "iPhone10_2", "os": "15", "screen": { "size": "2208x1242", "wide": 2208, "narrow": 1242 }, "type": "iphone" }
]

export const fetchDevices = async () => {
    return devices;
};

export const fetchDeviceById = async (deviceuuid: string) => {
    return devices.find(device => device.deviceuuid === deviceuuid);
};

// export const updateDevice = async (deviceuuid: string, updatedData: Partial<typeof devices[0]>) => {
//     const index = devices.findIndex(device => device.deviceuuid === deviceuuid);
//     if (index !== -1) {
//         devices[index] = { ...devices[index], ...updatedData };
//     }
//     return devices[index];
// };