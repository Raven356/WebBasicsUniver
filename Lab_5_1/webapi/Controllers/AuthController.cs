using Lab_5.Core.UserOperations.Auth;
using Lab_5.Core.UserOperations.ChangePassword;
using Lab_5.Core.UserOperations.ChangeRole;
using Lab_5.Core.UserOperations.ChangeUserInfo;
using Lab_5.Core.UserOperations.DeleteUser;
using Lab_5.Core.UserOperations.GetUserInfo;
using Lab_5.Core.UserOperations.GetUserLogins;
using Lab_5.Core.UserOperations.Register;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace Lab_5.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IMediator _mediator;

        public AuthController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("check")]
        public async Task<IActionResult> CheckUserCredentials(CheckUserCredentialsQuery query)
        {
            try
            {
                var result = await _mediator.Send(query);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateNewUser(RegisterUserCommand registerUserCommand)
        {
            try
            {
                await _mediator.Send(registerUserCommand);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update-password")]
        public async Task<IActionResult> ChangePassword(ChangePasswordCommand changePasswordCommand)
        {
            try
            {
                await _mediator.Send(changePasswordCommand);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("change-role")]
        public async Task<IActionResult> ChangeRole(ChangeRoleCommand changeRoleCommand)
        {
            try
            {
                await _mediator.Send(changeRoleCommand);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete("delete-user")]
        public async Task<IActionResult> DeleteUser(DeleteUserCommand deleteUserCommand)
        {
            try
            {
                await _mediator.Send(deleteUserCommand);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update-info")]
        public async Task<IActionResult> UpdateUserInfo(ChangeUserInfoCommand changeUserInfo)
        {
            try
            {
                await _mediator.Send(changeUserInfo);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get-logins")]
        public async Task<IActionResult> GetUserLogins()
        {
            try
            {
                var result = await _mediator.Send(new GetUserLoginQuery());
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get-user-infos/{login}")]
        public async Task<IActionResult> GetUserInfos(string login)
        {
            try
            {
                var result = await _mediator.Send(new GetUserInfoQuery() { Login = login});
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
