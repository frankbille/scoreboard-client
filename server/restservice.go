package scoreboard

import (
	"github.com/emicklei/go-restful"
)

type RestService struct {
}

func (rs RestService) Register() {
	// Services that handle individual domains
	playerService := PlayerService{}

	// Creation of API paths
	ws := new(restful.WebService)

	ws.
		Path("/api").
		Consumes(restful.MIME_JSON).
		Produces(restful.MIME_JSON)

	// Players
	ws.Route(ws.GET("/players").To(playerService.GetAllPlayers).
		Doc("get all players").
		Writes(PlayerList{}))

	restful.Add(ws)
}
