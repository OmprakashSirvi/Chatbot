class Config(object):
    DEBUG = False
    TESTING = False

    SECRET_KEY = '97f140731548dc7ed21123547f73fb61415c3891'
    MONGO_URI = "mongodb+srv://ops_iot_database:<PASSWORD>@cluster0.grmlk.mongodb.net/College?retryWrites=true&w=majority"
    MONGO_PASSWORD = "kiH91aZkpPXGouHH"
    API_KEY = 'AIzaSyAhiTBs2pKP69iHe81Fxwr-yXS6RUPPIpo'
    SEACH_ENGINE_ID = '931ee067268ef454c'

    SESSION_COOKIE_SECURE = True

class ProductionConfig(Config):
    pass

class DevelopmentConfig(Config):
    DEBUG = True
    JSON_SORT_KEYS = False

    SECRET_KEY = '97f140731548dc7ed21123547f73fb61415c3891'
    MONGO_URI = "mongodb+srv://ops_iot_database:kiH91aZkpPXGouHH@cluster0.grmlk.mongodb.net/College?retryWrites=true&w=majority"
    MONGO_PASSWORD = "kiH91aZkpPXGouHH"
    
    API_KEY = 'AIzaSyAhiTBs2pKP69iHe81Fxwr-yXS6RUPPIpo'
    SEACH_ENGINE_ID = '931ee067268ef454c'

    SESSION_COOKIE_SECURE = False

class TestingConfig(Config):
    TESTING = True