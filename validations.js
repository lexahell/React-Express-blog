import { body } from 'express-validator';

export const loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть не менее 8 символов').isLength({
    min: 8,
  }),
];

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Пароль должен быть не менее 8 символов').isLength({
    min: 8,
  }),
  body('fullName', 'Имя должно быть не менее 2 символов').isLength({ min: 2 }),
  body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
];

export const postCreateValidation = [
  body('title', 'Введите заголовок статьи')
    .isLength({
      min: 3,
    })
    .isString(),
  body('text', 'Введите текст статьи')
    .isLength({
      min: 3,
    })
    .isString(),
  body('tags', 'Неверный формат тэгов').optional().isString(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
];
