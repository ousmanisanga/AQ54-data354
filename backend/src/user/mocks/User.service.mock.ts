import {userMock} from "./user.mock"

export class UserServiceMock{
    getUsers = jest.fn().mockResolvedValue(userMock)
    getUser = jest.fn().mockImplementation((id : string) => {
        return Promise.resolve(userMock.find( p => p.id === id))
    })
    createUser = jest.fn().mockResolvedValue({ message: "user created" })
    updateUser = jest.fn()
    deletetUser = jest.fn()
}