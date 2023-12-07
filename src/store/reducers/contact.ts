import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contact'

type ContactState = {
  contacts: Contato[]
}

const initialState: ContactState = {
  contacts: [
    {
      id: 1,
      fullName: 'Marcus Vinicius Lima Freitas Gambogi',
      email: 'marcusgambogi10@gmail.com',
      phoneNumber: '11962899594'
    },
    {
      id: 2,
      fullName: 'Larissa Cruz Freitas Gambogi',
      email: 'laricrfrei@gmail.com',
      phoneNumber: '11987345943'
    },
    {
      id: 3,
      fullName: 'Sany Fernanda da Cruz Freitas',
      email: 'freitasplanejamento@yahoo.com.br',
      phoneNumber: '11981028285'
    },
    {
      id: 4,
      fullName: 'Debora Regina de Lima Gambogi de Souza',
      email: 'deboragambogi@gmail.com',
      phoneNumber: '11973043777'
    }
  ]
}

const contactSlice = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    addHandle: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const existsContact = state.contacts.find(
        (t) =>
          t.fullName.toLowerCase() === action.payload.fullName.toLowerCase()
      )

      if (existsContact) {
        alert('Já existe um contato com esse nome!')
      } else {
        const lastContact = state.contacts[state.contacts.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.contacts.push(newContact)
      }
    },
    updateHandle: (state, action: PayloadAction<Contato>) => {
      const indexContact = state.contacts.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexContact >= 0) {
        state.contacts[indexContact] = action.payload
      }
    },
    deleteHandle: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contato) => contato.id !== action.payload
      )
    }
  }
})

export const { addHandle, updateHandle, deleteHandle } = contactSlice.actions

export default contactSlice.reducer
