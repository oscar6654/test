class SystemCheckSubmission
  attr_reader :solution, :student
  attr_accessor :grade
  def initialize(solution,student)
    @solution = solution
    @student = student
  end
  def assign_grade(grade)
    if grade >= 0
      @grade = grade
    else
      raise InvalidGradeError
    end
  end
  def graded?
    if @grade.nil?
      false
    else
      true
    end
  end



end

class InvalidGradeError < StandardError
end
