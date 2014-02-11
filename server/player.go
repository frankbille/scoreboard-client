package scoreboard

type Player struct {
	Id       string `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	FullName string `json:"fullName"`
	Group    string `json:"group"`
}

type PlayerList struct {
	Players    []Player   `json:"players"`
	Pagination Pagination `json:"pagination,omitempty"`
}
