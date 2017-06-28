class Circle
  attr_reader :radius
  def initialize(input)
    if input.kind_of(Hash)
      if input[:radius].nil?
        @radius = input[:diameter] / 2
      else
        @radius = input[:radius]
    else
      @radius = input
    end
  end
end
