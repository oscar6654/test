require "sinatra"
require "pry"
require_relative "models/player"
require_relative "models/team"
require_relative "models/team_data"

set :bind, '0.0.0.0'  # bind to all interfaces
def positions
  @positions = []
  TeamData::ROLL_CALL.each do |team,values|
    values.each do |position,name|
      if !@positions.include?(position)
        @positions << position
      end
    end
  end
  @positions
end

get "/" do
  erb :index
end

get "/teams" do
  @teams = Team.all
  # @teams = TeamData::ROLL_CALL

  erb :team
end
get "/positions" do
  @position = positions
  erb :position
end
get "/positions/:position_name" do
  @position_name = params[:position_name]
  @position = Player.all
  erb :show_player
end
get "/teams/:team_name" do
  # binding.pry
  @team_name = params[:team_name]
  @role_name = TeamData::ROLL_CALL[:"#{@team_name}"]


  erb :show
end
