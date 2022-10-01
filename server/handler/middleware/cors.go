package middleware

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)


func Cors(r *gin.Engine) {
	r.Use(cors.New(cors.Config{
    // アクセスを許可したいアクセス元
    AllowOrigins: []string{
			"*",
    },
    // アクセスを許可したいHTTPメソッド(以下の例だとPUTやDELETEはアクセスできません)
    AllowMethods: []string{
				"GET",
        "POST",
    },
    // 許可したいHTTPリクエストヘッダ
    AllowHeaders: []string{
        "Access-Control-Allow-Credentials",
        "Access-Control-Allow-Headers",
        "Content-Type",
        "Content-Length",
        "Accept-Encoding",
        "Authorization",
    },
    // preflightリクエストの結果をキャッシュする時間
    MaxAge: 24 * time.Hour,
  }))
	
}