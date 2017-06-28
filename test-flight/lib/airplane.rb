class Airplane
  attr_reader :type,:wing,:horsepower
  def initialize(type,wing,horsepower)
    @type = type
    @wing = wing
    @horsepower = horsepower
    @plane_start = false
    @plane_off = false
  end

  def start
    if @plane_start == true
      "airplane already started"
    else
      @plane_start = true
      "airplane started"
    end
  end

  def takeoff
    if @plane_start
      @plane_off = true
      "airplane launched"
    else
      "airplane has not started, please start"
    end
  end

  def land
    if !@plane_start
        "airplane not started, please start"
    elsif @plane_start && @plane_off == false
      "airplane already on the ground"
    elsif @plane_off
      "airplane landed"
    end
  end

end
