
export const resolvers = {
    Query: {
        hello: () => {
            return 'world';
        },
        characters: () => {
            return [
                {
                    id: 1,
                    name: 'Link',
                    race: 'Hylian'
                },
                {
                    id: 1,
                    name: 'Zelda',
                    race: 'Hylian'
                },
            ];
        }
    },
};