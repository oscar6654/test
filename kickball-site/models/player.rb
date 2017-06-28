require_relative "./team_data"

class Player
  attr_reader :name, :position, :team_name
  def initialize(name,position,team_name)
    @name = name
    @position = position
    @team_name = team_name
    # TeamData::ROLL_CALL[:"Simpson Slammers"].each do |role,name
  end
  def self.all
    @name_position_team = []
    TeamData::ROLL_CALL.each do |team,values|
      values.each do |position,name|
        @name_position_team << Player.new(name.to_s,position.to_s,team.to_s)
      end
    end
    @name_position_team
  end

end
