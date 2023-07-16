import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



interface Language {[key:string]:string}

interface LanguageInterface {language:{messages:Language, usersLocale:string}}


export const fetchLanguageText = createAsyncThunk(
    'language/fetchLanguageText',
    async (locale: string):Promise<{messages:Language, usersLocale:string}> => {
       const lang = await import(`../../public/languages/${locale}.json`)
       return {messages:lang, usersLocale:locale}
    }
)


const languageSlice = createSlice({
    name: 'language',
    initialState: {} as LanguageInterface,
    reducers: 
        {

        },
        extraReducers: (builder) => {
            builder.addCase(fetchLanguageText.fulfilled, (state, action)=>{
                localStorage.setItem('language', action.payload.usersLocale)
                state.language = action.payload
            })
        }
        
})

export default languageSlice.reducer