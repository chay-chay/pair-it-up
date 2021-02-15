class UserSerializer
  include FastJsonapi::ObjectSerializer
  #has_many :scores
  attributes :name, :scores
end
