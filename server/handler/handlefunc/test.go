package handlefunc

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func QustionTest(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"message": "qa test ok"})
}