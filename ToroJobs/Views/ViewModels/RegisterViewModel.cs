﻿using System.ComponentModel.DataAnnotations;

namespace ToroJobs.Views.ViewModels
{
    public class RegisterViewModel
    {

        [Required, DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Required, DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password), Compare(nameof(Password))]
        public string ConfirmPassword { get; set; }

        [Required]
        public bool IsEmployer { get; set; }

    }
}
