export default {
    async query(prompt) {
        const response = await this.$axios.$post('/api/analysis', {
            model: "deepseek-ai/DeepSeek-V3",
            messages: [{ role: "user", content: prompt }],
            max_tokens: 256
        }, {
            timeout: 15000,
            headers: {
                Authorization: `Bearer ${this.$config.apiKey}`
            }
        });

        return response.choices[0].message.content;
    }
} 