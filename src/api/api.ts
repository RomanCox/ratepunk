import axios from 'axios';

interface PutRequestResponseType {
    record: {
        email: string,
    },
    metadata: {
        parentId: string,
        private: boolean
    }
}

const instance = axios.create({
	baseURL: 'https://api.jsonbin.io/v3/b/',
	headers: {
		'Content-Type': 'application/json',
		'X-Master-Key': '$2b$10$0cSIDcNHLlzD3KsJnK6TAONEE2IhimjAqlq/tcnuSIJiX84VweKTi',
	},
});

export const EmailApi = {
	async updateEmail(email: string) {
		const json = JSON.stringify({email});
		return await instance.put<PutRequestResponseType>('647f559a9d312622a36b6692', json);
	},
};