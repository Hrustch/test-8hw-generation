import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, postContact, removeContact } from "Services/API";


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
    const data = await getContacts();
    return data;
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact) => {
    const data = await postContact(contact);
    return data;
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id) => {
    const data = await removeContact(id);
    return data;
});