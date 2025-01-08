

export const HeroCreateService = async (req, res) => {
    try{


        return { status: 'success', message: 'Hero Content created successfully',  }

    }catch (e) {
        return { status: 'error', message: e.toString() };
    }
}