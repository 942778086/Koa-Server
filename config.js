const config = {
    /**
     * 后台运行的端口
     */
    port: 3001,
    /**
     * 默认的分页查询的数量
     */
    commonPageSize: 6,
    /**
     * 数据库配置
     */
    database: {
        database: 'hubu-wall',
        user: 'root',
        password: '123456',
        port: '2207',
        host: 'localhost'
    },
}
module.exports = config
