class CreateScores < ActiveRecord::Migration[6.1]
  def change
    create_table :scores do |t|
      t.integer :number
      t.belongs_to :user, null: false, foreign_key: true #samething t.integer :user_id

      t.timestamps
    end
  end
end
