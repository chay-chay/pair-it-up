class UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def create
        user = User.create(name: params[:name])
        user.scores.build(number: params[:number])
        user.save
        render json: UserSerializer.new(users)
    end

    def show
        user = User.find_by(id: params[:id])
        render json: UserSerializer.new(users)
    end
end
