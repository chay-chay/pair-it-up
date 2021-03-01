class ScoresController < ApplicationController
    def index
        scores = Score.all
        render json: ScoreSerializer.new(scores)
    end

    def topten
        top_scores = Score.topten_scores
        render json: top_scores
    end

end
