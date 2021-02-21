class Score < ApplicationRecord
belongs_to :user
validates :number, presence: true

scope :topten, -> { order('number ASC').limit(10) }

def self.topten_scores
  top_ten = Score.topten
  top_ten.each_with_index.map do |move,i|
    {
      rank: i+1,
      number: move.number,
      name: User.find_by(id: move.user_id).name
    }
    end
  end
end


#   belongs_to :user
#   validates :number, presence: true

#   scope :topten, -> { order('num desc').limit(10) }

#   def self.top_ten_moves
#     top_ten = Score.topten
#     top_ten.each_with_index.map do |move, i|
#       {
#         moves: i+1,
#         number: move.number
#         name: User.find_by(id: move.user_id).name
#       }
#     end
#   end
# end