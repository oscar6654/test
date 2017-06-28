require_relative "./team_data"

class Team
  attr_reader :name
  def initialize(name)
    @name = name

    # @team_names = []
    # TeamData::ROLL_CALL.each do |key,value|
    #   @team_names.push(key)
    # end
  end
  def self.all
    @array = []
    TeamData::ROLL_CALL.each do |name,values|
      @array.push(Team.new(name))
    end
    @array
  end
  def players
  end

end
