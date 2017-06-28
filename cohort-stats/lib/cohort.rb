class Cohort
  attr_reader :title, :start_date, :end_date
  attr_accessor :students, :system_checks
  def initialize(title,start_date,end_date)
    @title = title
    @start_date = start_date
    @end_date = end_date
    @students = []
    @system_checks = []
  end
  def career_kickoff
    @end_date+4
  end
  def enroll(student)
    # if @students.length == 0
    #   @students.push(student)
    # end
    array = []
    # if @students.any? == false
    #   @students.push(student)
    # else
      @students.each do |stud|
        array.push(stud.name)
      end
      if !array.include?(student.name)
        @students.push(student)
      end
    # end

    # @students.push(student)
  end
  def assign(system_check)
    @system_checks.push(system_check)
  end
  def roster
    cohort_title = "Cohort: #{@title}\n--------------------"
    name_email = ""
    @students.each do |student|
      name_email+= "#{student.name} #{student.email}"
    end
    cohort_title.concat(name_email)
  end

  def system_check_completed?(system_check)
    system_check.submissions.length == @students.length
  end






end
