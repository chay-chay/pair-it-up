class ScoreSerializer
  include FastJsonapi::ObjectSerializer
  #belongs_to :user
  attributes :number, :user_id
end
