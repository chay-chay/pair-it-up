class ScoresController < ApplicationController
    def index
        scores = Score.all
        render json
end
