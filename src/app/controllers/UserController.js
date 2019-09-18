// a bibilioteca não tem export por isso colocar o *, que coloca tudo na variavel Yup
import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    // validações de dados
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    // verifica se o usuario está cadastrado
    const userExists = await User.findOne({ where: { email: req.body.email } });

    if (userExists)
      return res.status(400).json({ erro: 'User already exists' });

    // cria o usuario no banco de dados
    const { id, name, email, provider } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
    });
  }


  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    // verifica se o usuario está mudando o email
    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });

      if (userExists)
        return res.status(400).json({ erro: 'User already exists' });
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name, provider, avatar_id } = await user.update(req.body);

    return res.json({
      id,
      name,
      email,
      provider,
      avatar_id,
    });
  }
}

export default new UserController();
