class BoundingArea
  def initialize(array=[])
    @box1 = array[0]
    @box2 = array[1]
  end
  def boxes_contain_point?(x,y)
    if @box1.nil? && @box2.nil?
      false
    else
      @box1.contains_point?(x,y) || @box2.contains_point?(x,y)
    end
  end
end
